import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useStyles,theme } from '../Stilo/Style';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';

function Boton(props) {
    const {classes,onClick} = props
    return (
        <ThemeProvider theme={theme}>
            <button onClick={onClick}  className={classes.btn}>
                <Typography component="span" style={{fontWeight:500,fontSize:"16px"}} >
                    Search for places
                </Typography>
            </button>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(Boton)
