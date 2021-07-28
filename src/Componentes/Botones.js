import React,{ useState } from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import { useStyles,theme } from '../Stilo/Style';

function Botones(props) {
    const [drawer, setDrawer] = useState(false);
    const {classes} = props

    const toggleDrawer = (open) => (e)=>{
        setDrawer(open)
    }

    const list = () => (
        <div style={{width:"459px",backgroundColor:"#1E213A"}} >
          
        </div>
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
