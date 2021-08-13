import React, { useContext } from 'react'
import { DatoContext } from '../App'

function Box2() {
    const nombre = useContext(DatoContext)
    return (
        <div className={classes.box2}>
              <span style={{color:"#fff"}}>{nombre}</span>
        </div>
    )
}

export default Box2
