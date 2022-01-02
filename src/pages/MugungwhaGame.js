import React, { useEffect, useState } from "react";
import yeongheefront from "../img/yeongheefront.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/Styled";
import TPose from '../img/TPose.jpg'
import music from '../sound/assets_sound.wav'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    minHeight: "100%",
    padding: theme.spacing(2),
    alignItems: "center",
    color: theme.palette.text.secondary,
  },
}));
const MugungwhaGame = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data,setData]=useState(0);
  const [result,setResult]=useState(0);

  useEffect(()=>{
    ff()
  },[data])

  const ff =async()=>{

    await axios({
      method:'get',
      url:'http://127.0.0.1:5100/result',
      headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}   
    }).then((response)=>{
      console.log(response)
      setResult(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  setInterval(function(){
    setData(data+1)
    if(result==='a'||result==='b'){
      clearInterval()
    }
  },4000)
 
  return (
    <div className={classes.root}>
    
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={TPose} width='100%' height='600px'/>
          <img src="http://localhost:5100/move_main" width="100%"></img>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <img src="http://localhost:5100/pose_main" width="100%" height='880px'></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img src={yeongheefront} alt="관리자" width="100%"></img>
           
          
            <button
              style={{
                width: '140px',
                height: '70px',
                backgroundColor: 'red',
                fontWeight: 'bold',
                fontSize: '35px',
                borderRadius: '20px',
                color: 'white',
                fontFamily:'koryeo'}}
              onClick={() => navigate("/retry")}
            >
              그만!
            </button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MugungwhaGame;
