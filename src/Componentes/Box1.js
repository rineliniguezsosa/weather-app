import React, { useContext, useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { useStyles,theme } from '../Stilo/Style';
import Box2 from './Box2';
import { DatoContext } from '../App'
import Clouds from './Clouds'



//url = https://api.openweathermap.org/data/2.5/forecast?q=mexico&cnt=5&units=metric&appid=4c65bfb00a7e250d201ef290bd3f4efa
//https://api.openweathermap.org/data/2.5/forecast?q=mexico&cnt=5&units=metric&lang=sp&appid=4c65bfb00a7e250d201ef290bd3f4efa
function Box1(props) {
    
    const [drawer, setDrawer] = useState(false)
    
    
    
    const toggleDrawer = (open) => (e)=>{
        setDrawer( open );
    }
    const list = () => (
        <div className={classes.draw} >
          
        </div>
    )
    const {classes,locacion} = props
    const nombre = useContext(DatoContext)
    return (
        <div>
        <div className={classes.box1}>
            <ThemeProvider theme={theme}>
            {/* <Boton onClick={toggleDrawer(true)}></Boton> */}
            <button onClick={toggleDrawer(true)}  className={classes.btn}>
                <Typography component="span" style={{fontWeight:500,fontSize:"16px"}} >
                    Search for places
                </Typography>
            </button>

            <Avatar className={classes.icon}>
                <GpsFixedIcon></GpsFixedIcon>
            </Avatar>
            <Drawer
            open={drawer}
            anchor={"left"}
            onClose={toggleDrawer(false)}
            >
            {list()}
            </Drawer>
            <Clouds></Clouds>
            <span style={{color:"#fff"}}>{nombre}</span>
            <div className={classes.locacion}><Typography>{locacion}</Typography></div>
           
            </ThemeProvider>
        </div>
        <Box2></Box2>
        </div>
    )
}

export default withStyles(useStyles)(Box1)
