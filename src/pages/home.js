import React from 'react'
import PropTypes from 'prop-types';
import {
    Typography,
    Paper,
    Tabs,
    Tab,
    Box,
    Container
  } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import NatureIcon from '@material-ui/icons/Nature';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import logo from '../logo.png';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import {co2GlobalData} from '../data/co2GlobalData';
import {co2ByCountry} from '../data/co2ByCountry';
import {forecast} from '../data/forecast'
import {foreCastAlgae} from '../data/foreCastAlgae'


//  function fetchCsv() {
//     return fetch('../data/co2.csv').then(function (response) {
//         let reader = response.body.getReader();
//         let decoder = new TextDecoder('utf-8');

//         return reader.read().then(function (result) {
//             console.log(result.value)
//             return decoder.decode(result.value);
//         });
//     });
// }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    logo: {
      margin: 'auto',
      display: 'block',
    },
    lineChart: {
      margin: 'auto',
    },
    headingtext: {
      textAlign: 'center',
      color: 'rgb(16 152 107)',
    },
    headh4: {
      padding: 20,
      color: 'rgb(26, 132, 97)',
    }
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
  

  
export default function HomePage() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);


      const handleChangeIndex = (index) => {
        setValue(index);
      };
      const handletabChange = (event, newValue) => {
        setValue(newValue);
      };
      function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }

    return (
              
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
                <img src={logo}  alt="logo" className={classes.logo}/>

  <Paper square style={{ marginBottom: '500' }} elevation={3}>
      <Typography variant="h5" className={classes.headingtext}>
        CO2 Emissions from 1960 - 2020 in Billion Tons
      </Typography>
        <LineChart
      className={classes.lineChart}
      width={700}
      height={400}
      data={co2GlobalData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="#8884d8"/>
      <YAxis />
      <Tooltip />
      <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
      <Line
        type="monotone"
        dataKey="world"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    <Typography align="center">
        Source <a href="https://data.worldbank.org/indicator/EN.ATM.CO2E.PC">World Bank</a>
    </Typography>
 </Paper>
    <Container maxWidth="sm">
        <div className={classes.drawerHeader} />
        <Typography variant="h4" className={classes.headh4}>
        CO2 Emissions 
        </Typography>
        <Typography paragraph>
        For hundreds of years, extremely <a href="https://www.eia.gov/energyexplained/energy-and-the-environment/where-greenhouse-gases-come-from.php#:~:text=When%20fossil%20fuels%20are%20combusted,which%20we%20use%20for%20energy.&text=For%20example%2C%20for%20the%20same,CO2%20produced%20by%20burning%20coal." target="blank">heavy usage of fossil fuels</a> by humans has polluted Earth’s atmosphere with greenhouse gases. 
        The most commonly emitted greenhouse gas, carbon dioxide, tends to be the primary focus of global warming treatments. 
        Carbon dioxide (CO2) is a colorless gas that is released in great quantities when fossil fuels are burned. 
        When the carbon dioxide concentration goes up, temperature goes up. When the carbon dioxide concentration goes down, temperature goes down.
        Greenhouse gases trap heat by <a href="http://chemistry.elmhurst.edu/vchembook/globalwarmA5.html#:~:text=Greenhouse%20Gases&text=Radiation%20from%20the%20sun%20is,earth%20as%20radiant%20visible%20light.&text=The%20infrared%20radiation%20strikes%20a,this%20absorption%20of%20IR%20radiation." target="blank">absorbing infrared radiation</a> that would otherwise leave Earth’s atmosphere. This increases the overall temperature of the earth,
         which leads to the melting of polar ice caps, rising sea levels, and strengthening of tropical storm systems, among many other tremendous environmental effects.
         ,including worsening natural disasters like floods, heatwaves, and droughts. 
        "In a business-as-usual scenario, where little progress is made in the development and implementation of global climate policies, global greenhouse gas emissions could rise to up to 87 Gt CO2 by 2050, way beyond safe limits,” Achim Steiner, UN Under-Secretary-General and Executive Director of UNEP.
        </Typography>
    <Paper style={{ marginBottom: '500' }} elevation={3}>
      <Typography variant="h4" className={classes.headingtext}>
        Biggest Co2 Emitters billion ton
      </Typography>
    <BarChart
          width={500}
          height={300}
          data={co2ByCountry}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="C02" fill="#8884d8" />
        </BarChart>
        <Typography align="center">
            Source <a href="https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions">Wikipedia</a>
        </Typography>
 </Paper>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Why Algae ?
        </Typography>
        <Typography paragraph>
        The more emissions are reduced, the more carbon dioxide we need to remove from the atmosphere (this is called sequestration). 
        Currently, forests have the biggest potential in the sequestration of CO2, but the future holds
        significant prospects for algae as well.
        WHY? 
        </Typography>
        <Typography variant="h4" align="center">
        Open-ocean algal blooms (algae-based carbon sequestration) 
        </Typography>
        <Typography>
        Algae <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4978769/#:~:text=Microalgae%20can%20grow%2010%E2%80%9350,than%20terrestrial%20plants%20%5B4%5D.&text=Efficiency%20of%20photosynthesis%20of%20microalgae,lipids%20in%20cells%20%5B8%5D." target="blank">can grow 10–50 times faster than terrestrial plants.</a> The major difference between land plants and algae is the presence/absence of roots, shoots, and leaves that represent sinks for energy. As a result of a faster growth rate, the CO2 removal efficiency of Algae is on average ten times higher than that of terrestrial plants. 

        Using Photosynthesis algae remove carbon dioxide from the atmosphere and turn it into biomass and oxygen.

        raw algal biomass can be harvested and used as a biofuel, which can provide a greener alternative to fossil fuel usage.
        Algae can even substitute other fossil fuels
        (in our calculations this would be diesel oil) with a more positive effect on the CO2 BALANCE. 

        This way is the most cost-effective sequestration process because this method produces the most algae in the least amount of time. Additionally, this method removes the most carbon dioxide from the atmosphere. 
        The amount of CO2 removed is directly proportional to the number of algae undergoing photosynthesis. So the bigger the scale the larger Co2 removed. 
        There are many benefits to open-ocean algal blooms. There is no shortage of space on the surface of the ocean, so, hypothetically, there is a seemingly infinite amount of algal mass that can be cultivated this way. This technique is also very cost-efficient
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
            Forecast of carbon dioxide emissions worldwide from 2018 to 2050 in billion metric tons.
    <LineChart
      className={classes.lineChart}
      width={500}
      height={300}
      data={forecast}
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
        dataKey="world"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    <Typography align="center">
        Source <a href="https://www.statista.com/statistics/263980/forecast-of-global-carbon-dioxide-emissions/#:~:text=Based%20on%20a%20business%2Das,economy%20and%20extreme%20weather%20conditions.">statista</a>
    </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        In the case of cultures of Chlorella species, the total amount of recycled carbon dioxide during 10 days of culture was 
          5.1 and 5.2 gCO2/l for CO2 concentrations of 4 and 8 %, respectively. In the case of cultures of Nannochloropsis species, the total amount of recycled carbon dioxide was higher, 
          namely 6.3 and 6.9 gCO2/l for CO2 concentrations of 4 and 8 %, respectively.

    <LineChart
      className={classes.lineChart}
      width={500}
      height={300}
      data={foreCastAlgae}
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
        dataKey="world"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
            <Line
        type="monotone"
        dataKey="algae"
        stroke="#139167"
      />
    </LineChart>
    <Typography align="center">
        Source <a href="https://www.statista.com/statistics/263980/forecast-of-global-carbon-dioxide-emissions/#:~:text=Based%20on%20a%20business%2Das,economy%20and%20extreme%20weather%20conditions.">statista</a>
    </Typography>
       </TabPanel>
       </Paper>
        </Typography>
        </Container>
      </main>
     
    )
}
