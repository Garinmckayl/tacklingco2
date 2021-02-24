import React from 'react'
import {
    Typography,
    Paper,
    Container
  } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import logo from '../logo.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Autorenew } from '@material-ui/icons';
import {forecast} from '../data/forecast';

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
    }
  }));

  

  
export default function Co2() {
    const classes = useStyles();

    return (
              <Container  maxWidth="sm">
      <main
      >
        <div className={classes.drawerHeader} />
        <img src={logo}  alt="logo" className={classes.logo}/>
        <Typography paragraph>
        Carbon dioxide (CO2) is a colorless gas that is released in great quantities when fossil fuels are burned. 
        When the carbon dioxide concentration goes up, temperature goes up. When the carbon dioxide concentration goes down, temperature goes down.
        Greenhouse gases trap heat by absorbing infrared radiation that would otherwise leave Earth’s atmosphere. This increases the overall temperature of the earth,
         which leads to the melting of polar ice caps, rising sea levels, and strengthening of tropical storm systems, among many other tremendous environmental effects.
         ,including worsening natural disasters like floods, heatwaves, and droughts.
        </Typography>
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
      </main>
      </Container>
    )
}
