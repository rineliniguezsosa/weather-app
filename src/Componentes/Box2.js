import React, { useContext } from 'react'
import { DatoContext } from '../App'
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from '../Stilo/Style';

function Box2(props) {
    const nombre = useContext(DatoContext)
    const {classes} = props
    return (
        <div className={classes.box2}>
              <span style={{color:"#fff"}}>{nombre}</span>
        </div>
    )
}

export default withStyles(useStyles)(Box2)
