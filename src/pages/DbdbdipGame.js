import React, { useEffect, useState } from "react";
import managerImage from "../img/manager.png";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import axios from 'axios'
import great from '../img/great.jpeg';
import soso from '../img/soso.jpeg';
import fail from '../img/fail.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    minHeight: "100%",
    padding: theme.spacing(2),
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    color: theme.palette.text.secondary,
  },
  paperButton: {
    minHeight: "100%",
    padding: theme.spacing(2),
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "black",
    color: theme.palette.text.secondary,
  },
}));

const DbdbdipGame = ({ props }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data,setData]=useState(0);
  const [result,setResult]=useState(0);
  const [start,setStart]=useState(false)
  const [sound,setSound]=useState(false)
  

  const refreshPage = ()=>{
    window.location.reload();
 }
  useEffect(()=>{
    setTimeout(function(){
      ff()
      if(result===0){
        setData(data+1)
      }
    }, 4000);
  }, [data]);
  
  const ff = async () => {
    await axios({
      method: "get",
      url: "http://172.30.1.6:5200/result",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {result===0&&
            <img src="http://172.30.1.6:5200/video_feed" width="100px"></img>
            }
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperButton}>
          {result===0&&
          <div>
            <img src="http://172.30.1.6:5200/video_print_out" width="100%"></img>
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
              onClick={() => {navigate("/retry")}}
            >
              그만!
            </button>
            </div>
          }{result===1&&
            <div>
            <img src={fail} width="100%" />
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
            onClick={()=>{navigate("/retry")
            refreshPage()}}>종료</button>
            </div>
          }
          {result===2&&
            <div>
            <img src={great} width="100%" />
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
            onClick={()=>{navigate("/retry")
            refreshPage()}}>종료</button>
            </div>
          }
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DbdbdipGame;
