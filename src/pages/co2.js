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
import {co2GlobalData} from '../data/co2GlobalData';


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
      </main>
      </Container>
    )
}
