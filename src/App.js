import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Paper,
  Tabs,
  Tab,
  Box,
  Container
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorIcon from '@material-ui/icons/Error';
import NatureIcon from '@material-ui/icons/Nature';
import logo from './logo.png';
import Co2 from './pages/co2';
import HomePage from './pages/home';

const history = createBrowserHistory();

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};




export default function Home() {
  const [co2Data, setco2Data] = useState([]);
  const [loading, setLoading] = useState(false);
  const source = axios.CancelToken.source();
  const co2Options = {
    method: 'GET',
    url: `https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.json`,
    cancelToken: source.token,
  };
  useEffect(() => {
    setLoading(true);
    const getCo2Data = async () =>
      await axios
        .request(co2Options)
        .then((response) => {
          setLoading(false);
          setco2Data(response.data.result);
          console.log(co2Data, 'Co2 data')
        })
        .catch((error) => {
          setLoading(false);
          if (axios.isCancel(error)) {
          } else {
            throw error;
          }
        });
        getCo2Data();
    return () => {
      source.cancel();
    };
  }, []);
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);
  const [title, setTitle] = useState("Home");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handletabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onItemClick = title => () => {
    setTitle(title);
    // setDrawer(variant === "temporary" ? false : drawer);
    // setDrawer(!drawer);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Tackling Co2 using Data and algae
          </Typography>
        </Toolbar>
      </AppBar>
      <Router history={history}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem 
          button 
          component={Link} 
          key="Co2 Emission" 
          to="co2"
          onClick={onItemClick("Home")}
          >
             <ListItemIcon><ErrorIcon /></ListItemIcon>
             {/* <Link to="co2">Co2 Emission</Link> */}
              <ListItemText primary="Co2 Emission" />
          </ListItem>
          <ListItem button key="Algae Effect">
             <ListItemIcon><NatureIcon /></ListItemIcon>
              <ListItemText primary="Algae Effect" />
          </ListItem>
          <Switch>
          <Route exact path="/" component={HomePage}>
            <HomePage />
          </Route>
          <Route path="/co2" component={Co2}>
            <Co2 />
          </Route>
          {/* <Route path="/dashboard">
          </Route> */}
        </Switch>
        {/* <Router>
          {['Co2 Emmision', 'Algae Effect'].map((text, index) => (
            <ListItem button key={text}>
              <Link to="/">{text}</Link>
              <ListItemIcon>{index % 2 === 0 ? <ErrorIcon /> : <NatureIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </Router> */}
        </List>
      </Drawer>
      </Router>

      <Container fixed>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Route exact path="/" component={Home} />
        <Route path="/co2" component={Co2} />
        <div className={classes.drawerHeader} />
        <img src={logo}  alt="logo"/>

        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>

        <Typography paragraph>
        CO2 is one of the essential components required to grow algae, along with sunlight, water and nutrients.
        Algae can consume more carbon dioxide than trees because it can cover more surface area, grow faster, and be more easily controlled by bioreactors, given its relative size.
        chlorella vulgaris
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Why Algae ?
        </Typography>
        <Typography paragraph>
        Algae are <a href="https://en.wikipedia.org/wiki/Photosynthesis">photosynthetic</a> organic organisms.
        Most are aquatic. Algae "absorbs" the carbon as more Algae. Algae can burn-through more carbon dioxide than trees since
         it can <b>cover more surface zone, develop quicker(grow faster) and be more easily controlled</b>.
        CO2 is one of the fundamental segments needed to develop Algae, alongside daylight, water, and supplements. 
        A specific strain of algae called <b>chlorella vulgaris</b> is especially extremely effective
         when it comes to absorbing co2, it can soak up much more CO2 than any other plant.
        </Typography>
        <Typography paragraph>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handletabChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
            centered
          >
            <Tab label="Co2 Emission" icon={<ErrorIcon />} label="Co2" {...a11yProps(0)} />
            <Tab label="Algae Impact" icon={<NatureIcon />} label="Algae impact" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <Paper
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla pos
        </TabPanel>
      </Paper>
        </Typography>
      </main>
      </Container>
    </div>
  );
}
