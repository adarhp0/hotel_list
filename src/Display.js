import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GradeIcon from '@material-ui/icons/Grade';



const useStyles = makeStyles(() => ({
    root:{
        backgroundColor:"#ec7242",
        borderColor:"unset",
        borderStyle:"solid",
        borderRadius:"28px",
        marginBottom:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:"71%"
    },
    rname:{
        
height:35,
paddingTop:18
    },
    rrate:{
        height:46,
        paddingTop:9,
        textAlign:"center"
    },
    cuisine:{
        paddingTop:18,
        height:35
    },ctwo:{
        
        height:40,
        paddingTop:15,
        
    }
  }));

const Display=({ob})=>{


const[cu,setCu]=useState([])
    const classes = useStyles();
    useEffect(()=>{
        setCu(ob["cuisines"])
    },[ob])
    
    const rate_style={
        backgroundColor:ob["rating_color"]
    }

    return(
    <div>
        

        <Grid container className={classes.root} spacing={0}>
            <Grid item xs={12}>
    <div className={classes.rname}>{ob["res_name"]}</div>
            </Grid>
            <Grid item xs={8}>
    <div className={classes.ctwo} >Cost for two{' '}:{' '}<span>{ob["cost_two"]}</span></div>
            </Grid>

            <Grid item xs={4}>
    <div style={rate_style} className={classes.rrate}> 
    {ob["rating"]}<GradeIcon/><br></br>{ob["votes"]} Votes</div>
            </Grid>
            <Grid item xs={10}>
                <div className={classes.cuisine} >
    Cuisines:{' '}{cu}
                </div>
            </Grid>
            
        </Grid>
    </div>
        
    )
}
export default Display;