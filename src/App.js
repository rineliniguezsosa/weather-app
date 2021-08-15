import React, { useState,useEffect } from 'react';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Clouds from './Componentes/Clouds';
import { ThemeProvider,withStyles }from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { useStyles,theme } from './Stilo/Style'
import axios from 'axios';
export const DatoContext = React.createContext();


function App(props) {
  const { classes } = props
  const [locacion,setLocacion] = useState("mexico")
  const [temperatura, setTemperatura] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [unidad, setunidad] = useState("metric")
  const [forecast, setForecast] = useState([])
  const [drawer, setDrawer] = useState(false)
  
   
  const toggleDrawer = (open) => (e)=>{
        setDrawer( open );
  }
  const list = () => (
        <div className={classes.draw} >
          <CloseIcon className={classes.close}/>
          <form>
          <Input className={classes.search} placeholder="Search Location" startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{color:"#616475"}} />
            </InputAdornment>
          }
        />
          </form>
        </div>
  )
  const id = "4c65bfb00a7e250d201ef290bd3f4efa";
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locacion}&units=${unidad}&appid=${id}`)
    .then(response=>{
        setLocacion( response.data.name );
        setTemperatura(response.data.main.temp_max);
        setDescripcion(response.data.weather[0].description)  
    })
    .catch(error=>{
        console.log("A ocurrido un error",error);
    })
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${locacion}&cnt=5&units=${unidad}&lang=sp&appid=${id}`)
    .then(response =>{
      setForecast(response.data.list)
    })
    .catch(error=>{
      console.log("error",error);
    })
  }, [locacion,id,unidad])
  
  // let date2 = new Date()
  // let nn = date2.getMonth(fecha);
  // console.log(nn.toString())
  


  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let date = new Date();
  let dayweek = days[date.getDay()]
  let day = date.getDate();
  let month = months[date.getMonth()];
  

  
  return (
    <div className={classes.main} style={{width:"100%"}}>
        <div className={classes.box1}>
            <ThemeProvider theme={theme}>
            {/* <Boton onClick={toggleDrawer(true)}></Boton> */}
            <button onClick={toggleDrawer(true)}  className={classes.btn}>
                <Typography component="span" style={{fontWeight:500,fontSize:"16px"}} >
                    Search for places
                </Typography>
            </button>

            <Avatar onClick={()=> setLocacion("mexico")} className={classes.icon}>
                <GpsFixedIcon></GpsFixedIcon>
            </Avatar>
            <React.Fragment>
            <Drawer open={drawer} anchor={"left"} onClose={toggleDrawer(false)}>
            {list()}
            </Drawer>
            </React.Fragment>
            <Clouds></Clouds>
            <Typography theme={theme} className={classes.temperatura}>{temperatura}°C</Typography>
            <div className={classes.boxdescripcion}>
              <Typography theme={theme} className={classes.descripcion}>{descripcion}</Typography>
            </div>
              <Typography className={classes.today} theme={theme}>Today</Typography>
              <Typography className={classes.date} theme={theme}>{dayweek}, {day} {month}</Typography>
            <div>
              <Typography theme={theme} className={classes.locacion}>
                <LocationOnIcon/>{locacion}
              </Typography>
            </div>  
            </ThemeProvider>
        </div>
        <div className={classes.box2}>
          <ThemeProvider theme={theme}>
          <Avatar className={classes.celsius}>
            <Typography className={classes.gradosc} theme={theme}>°C</Typography>
          </Avatar>
          <Avatar className={classes.farenheit}>
            <Typography className={classes.gradosf} theme={theme}>°F</Typography>
          </Avatar>
          </ThemeProvider>
        </div>
    </div>
  );
}

export default withStyles(useStyles)(App);