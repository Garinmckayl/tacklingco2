import React from 'react'
import {
    Typography,
    Paper,
    Container
  } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import logo from '../logo.png';
import diatome from '../diatome.jpeg';
import bioreactor from '../bioreactor.png';
import Chlorellavulgaris from '../Chlorellavulgaris.jpg';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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
    images: {
      width: 500,
    }
  }));

  const data = [
    {
      name: '1900',
      uv: 4000,
      world: 2.3,
      amt: 2400,
    },
    {
      name: '1950',
      uv: 3000,
      world: 14,
      amt: 2210,
    },
    {
      name: '1960',
      uv: 3000,
      world: 11,
      amt: 2210,
    },
    {
      name: '2000',
      uv: 2000,
      world: 45,
      amt: 2290,
    },
    {
      name: '2020',
      uv: 2780,
      world: 70,
      amt: 2000,
    },
  ];

export default function Algae() {
    const classes  = useStyles();
    return (
        <Container maxWidth="sm">

<img src={logo}  alt="logo" className={classes.logo}/>

  
          <Typography paragraph>
          CO2 is one of the essential components required to grow algae, along with sunlight, water and nutrients.
          Algae can consume more carbon dioxide than trees because it can cover more surface area, grow faster, and be more easily controlled by bioreactors, given its relative size.
          chlorella vulgaris
          </Typography>
          <Typography variant="h3" gutterBottom align="center">
          Diatom Algae
          </Typography>
          <img src={diatome}  alt="diatome" className={classes.images}/>
          <Typography paragraph>      
          One good contestant can be diatom algae, diatom algae are good because it is the best natural food for zooplankton, krill, and fish. 
          Growing diatoms can prevent eutrophication and bloom of the harmful algae. 
          Diatoms are silicon-based algae (phytoplankton) that can out-compete the growth of other types of algae, including those toxic forms that cause HAB's. As well as preventing toxic algae from growing, 
          Diatoms are also good as they provide nutrients for fish whilst also increasing oxygen in the water.
          Diatoms are among the most important and prolific microscopic sea organisms and serve directly or indirectly as food for many animals.
          </Typography>

          <Typography variant="h3" gutterBottom align="center">
          Chlorella Vulgaris
          </Typography>
          <img src={Chlorellavulgaris}  alt="Chlorella-vulgaris" className={classes.images}/>
          <Typography paragraph>      
          Chlorella Vulgaris are Algae characterized by rapid growth, tolerance to stress factors, and tolerance against high concentrations of CO2, which indicates its effective accumulation and utilization
          In the case of cultures of Chlorella species, the total amount of recycled carbon dioxide during 10 days of culture was 
          5.1 and 5.2 gCO2/l for CO2 concentrations of 4 and 8 %, respectively. In the case of cultures of Nannochloropsis species, the total amount of recycled carbon dioxide was higher, 
          namely 6.3 and 6.9 gCO2/l for CO2 concentrations of 4 and 8 %, respectively. (source:  https://link.springer.com/article/10.1007/s12010-016-2062-3) 
          </Typography>

          <Typography variant="h2" gutterBottom align="center">
          Bioreactor
          </Typography>
          <img src={bioreactor}  alt="bioreactor" className={classes.images}/>
          <Typography paragraph>      
          Artificial growth chambers that have controlled temperature, pH, and nutrient levels that make for optimal growth rates of algae 
          The huge disadvantage to this method is that the cost of building and maintaining photobioreactors is too high and not cost-effective. 
          However, this method of algae-based carbon sequestration eliminates eutrophication and water contamination risks that are common in harmful algal blooms. 
          AI-powered Algae bioreactors are up to 400 times more efficient than a tree at removing CO2 from the atmosphere. 
          So it is promising for the future. 
          </Typography>

          <Typography paragraph>
          <Paper square>
                <LineChart
            className={classes.lineChart}
            width={500}
            height={300}s
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
                dataKey="world"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </Paper>

          </Typography>
        </Container>
    )
}
