import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import squidManager from "../img/manager.png";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  paper: {
    minHeight:'100%',
    padding: theme.spacing(2),
    alignItems: "center",
    color: theme.palette.text.secondary
  }
}));

const DalgonaGame = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data,setData]=useState(0);
  const [result,setResult]=useState('');

  useEffect(()=>{
    ff()
  },[data])

  const ff =async()=>{

    await axios({
      method:'get',
      url:'http://127.0.0.1:5000/rr',
      headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}   
    }).then((response)=>{
      console.log(response)
      setResult(response.data)
    }).catch((error)=>{
      console.log('안돼!')
    })
  }
  setInterval(function(){
    setData(data+1)
    if(result===1){
      clearInterval()
    }
  },4000)
 
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
          <img src="http://127.0.0.1:5000/video_feed" width="100%"/>
          {result ===0? <img src="http://127.0.0.1:5000/video_feed" width="100%"/>:<h1>끝!</h1>}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src="http://127.0.0.1:5000/video_feed1" width="100%"/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={squidManager} alt="관리자" width="100%"></img>
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

export default DalgonaGame;
