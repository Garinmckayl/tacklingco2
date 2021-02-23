import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from '@material-ui/core/Divider';
import ErrorIcon from '@material-ui/icons/Error';
import NatureIcon from '@material-ui/icons/Nature';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';

import Home from "../pages/home";
import Co2 from "../pages/co2";
import Algae from "../pages/algae";
import { ColorLensTwoTone } from "@material-ui/icons";

const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  },
  aboutp:{
    marginTop: 100,
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick, onClick, onClose, open }) => (



  <Fragment>
    <AppBar className={classes.aboveDrawer} style={{ background: 'rgb(26, 132, 97)' }}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <IconButton href="https://github.com/Garinmckayl/tacklingco2" target="blank"  color="inherit">
                <GitHubIcon />
        </IconButton>
        <Button variant="outlined" style={{ background: '#fff' }} onClick={onClick}>About</Button>
        <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{ background: 'rgb(26, 132, 97)' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              About Us
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography className={classes.aboutp} gutterBottom align="center">
        My Name Is Nathaniel, This project is intended to help people realize the impact of CO2 emission on our planet, And how we can tackle this very problem using Algae.
        </Typography>
      </Dialog>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === "persistent"
          })}
        />
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={onItemClick("Home")}
          >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Co2"
            onClick={onItemClick("Co2 Emission")}
          >
            <ListItemIcon><ErrorIcon /></ListItemIcon>
            <ListItemText>Co2 Emission </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Algae"
            onClick={onItemClick("Algae Tremendous Potential Impact")}
          >
            <ListItemIcon><NatureIcon /></ListItemIcon>
            <ListItemText>Algae </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route path="/Co2" component={Co2} />
        <Route path="/Algae" component={Algae} />
      </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [open, setOpen] = React.useState(false);

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} onClick={handleClickOpen} onClose={handleClose} open={open}/>
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
