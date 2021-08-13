import React, { useState,useEffect } from 'react';
import Box from '@material-ui/core/Box'
import Box1 from './Componentes/Box1'
//import Box2 from './Componentes/Box2'
import { withStyles }from '@material-ui/core/styles'
import { useStyles } from './Stilo/Style'
import axios from 'axios';
export const DatoContext = React.createContext();


function App(props) {
  const { classes } = props
  const [locacion,setLocacion] = useState("mexico")
  const [temperatura, setTemperatura] = useState("")
  
  const id = "4c65bfb00a7e250d201ef290bd3f4efa";
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locacion}&units=metric&appid=${id}`)
    .then(response=>{
        setLocacion( response.data.name );
        setTemperatura(response.data.main.temp_max);
    })
    .catch(error=>{
        console.log("A ocurrido un error",error);
    })
  }, [locacion,id])

  return (
    <Box className={classes.main} style={{width:"100%"}}>
        <Box1 locacion={locacion}  temperatura={temperatura}>
        </Box1>
    </Box>
  );
}

export default withStyles(useStyles)(App);