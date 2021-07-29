import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from '../Stilo/Style';

function Clouds(props) {
    const {classes} = props
    return (
        <div>
            <figure  className={classes.cloud} alt=""></figure>
            <figure  className={classes.cloud2} alt=""></figure>
            <figure  className={classes.suncloud} alt=""></figure>
        </div>
    )
}

export default withStyles(useStyles)(Clouds)
