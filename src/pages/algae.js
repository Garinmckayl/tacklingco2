import React from 'react'
import PropTypes from 'prop-types';
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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import logo from '../logo.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
        <Container fixed>

<img src={logo}  alt="logo" className={classes.logo}/>

  
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
          <Paper square>
                <LineChart
            className={classes.lineChart}
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
