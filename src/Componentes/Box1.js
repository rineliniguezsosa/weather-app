import React,{ useState,useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import Boton from './Boton'
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Clouds from './Clouds'
import { useStyles,theme } from '../Stilo/Style';
import axios from 'axios';


function Box1(props) {
    const {classes} = props
    const [drawer,setDrawer] = useState(false);
    const [locacion] = useState("mexico")
    const [info, setInfo] = useState([])
    let id = "4c65bfb00a7e250d201ef290bd3f4efa";
    
    const toggleDrawer = (open) => (e)=>{
        setDrawer(open)
    }
     
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locacion}&appid=${id}`)
        .then(response=>{
            setInfo(response.data)
            console.log(response.data);
        })
    }, [locacion,id])
    
    const list = () => (
        <Box className={classes.draw} >
          
        </Box>
    )

    
    return (
        <Box className={classes.box1}>
            <ThemeProvider theme={theme}>
            <Boton onClick={toggleDrawer(true)}></Boton>
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

            { info.map(item=>(
                <span>
                    {item.id}
                </span>
                ))
            }

            </ThemeProvider>
        </Box>
    )
}

export default withStyles(useStyles)(Box1);
