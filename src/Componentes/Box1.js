import React from 'react';
import Box from '@material-ui/core/Box';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Botones from './Botones'
import { useStyles,theme } from '../Stilo/Style';

function Box1(props) {
    const {classes} = props
    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.box1}>
            <Botones></Botones>
            <figure  className={classes.cloud} alt=""></figure>
            <figure  className={classes.cloud2} alt=""></figure>
            <figure  className={classes.suncloud} alt=""></figure>
            <Typography style={{fontWeight:500,fontSize:"144px"}} className={classes.grados}>
                15c
            </Typography> 
            <Typography style={{fontWeight:600,fontSize:"36px"}} className={classes.clima}>
                Shower
            </Typography>
        </Box>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(Box1);
