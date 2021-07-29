import React,{ useState,useEffect } from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import { useStyles,theme } from '../Stilo/Style';



function Botones(props) {
    const [drawer, setDrawer] = useState(false);
    const [locacion, setLocacion] = useState("mexico")
    const [datos, setDatos] = useState([])
    const {classes} = props
    let id = "4c65bfb00a7e250d201ef290bd3f4efa";
     
    const toggleDrawer = (open) => (e)=>{
        setDrawer(open)
    }
     
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locacion}&appid=${id}`)
        .then(response=>{
            setDatos(response.data)
        })
    }, [locacion,id])
    
    const list = () => (
        <Box className={classes.draw} >
          
        </Box>
    )
    return (
        <ThemeProvider theme={theme}>
            <button onClick={toggleDrawer(true)} className={classes.btn}>
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
        </ThemeProvider>
        
    )
}

export default withStyles(useStyles)(Botones)
