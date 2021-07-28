import Box from '@material-ui/core/Box'
import Box1 from './Componentes/Box1'
import { withStyles }from '@material-ui/core/styles'
import { useStyles } from './Stilo/Style'


function App(props) {
  const { classes } = props
  return (
    <Box className={classes.main} style={{width:"100%"}}>
      <Box1>

      </Box1>
    </Box>
  );
}

export default withStyles(useStyles)(App);