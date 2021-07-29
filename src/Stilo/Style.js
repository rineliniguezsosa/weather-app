import { createTheme } from '@material-ui/core/styles';
import cloud from '../Recursos/HeavyCloud.png'
import suncloud from '../Recursos/Shower.png'

export const theme = createTheme({
    typography: {
      fontFamily: [
        'Raleway',
        'sans-serif',
      ].join(','),
    },
});

export const useStyles = () =>({
    main:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#100E1D",
    },
    box1:{
        width:"459px",
        height:"1023px",
        // border:"1px green solid",
        backgroundColor:"#1E213A",
    },
    btn:{
        backgroundColor:"#6E707A",
        fontWeight:500,
        fontSize:"16px",
        width:"161px",
        height:"40px",
        position:"absolute",
        color:"#fff",
        left: "46px",
        top: "42px",
        border:"none",
    },
    icon:{
        backgroundColor:"#6D6F79",
        width:"40px",
        height:"40px",
        position:"absolute",
        left: "373px",
        top: "42px",
    },
    cloud:{
        background:`url(${cloud})`,
        position: "absolute",
        width:"203px",
        height:"150px",
        left:"-89px",
        top: "103px",
    },
    cloud2:{
        background:`url(${cloud})`,
        position: "absolute",
        width:"203px",
        height:"150px",
        left:"240px",
        top: "75px",
    },
    suncloud:{
        background:`url(${suncloud})`,
        position: "absolute",
        width: "202px",
        height: "234px",
        left: "129px",
        top: "191px",
    },
    grados:{
        position: "absolute",
        width:"192px",
        height:"169px",
        left:"124px",
        top: "512px",
        color:"#E7E7EB",
    },
    clima:{
        position: "absolute",
        width:"129px",
        height:"42px",
        left:"165px",
        top: "768px",
        color:"#A09FB1",
    },
    draw:{
        width:"459px",
        backgroundColor:"#1E213A",
        height:"100%",
    },
    
    
})

