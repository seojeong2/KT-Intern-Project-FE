import React, { useEffect, useState } from "react";
import yeongheefront from "../img/yeongheefront.png";
import yeongheeback from "../img/yeongheeback.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import T from '../img/TPose.jpeg'
import Tree from '../img/Tree.jpg'
import Warrior from '../img/Warrior.jpg'
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
    color: theme.palette.text.secondary,
  },
}));
const MugungwhaGame = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data,setData]=useState(0);
  const [result,setResult]=useState(0);
  const [start,setStart]=useState(false)
  const [pose,setPose]=useState('')
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
    },4000)
  },[data])
  useEffect(()=>{
    intro()
    setTimeout(function(){
      setSound(true)
    },7000)
  },[])
  const ff =async()=>{
    await axios({
      method:'get',
      url:'http://127.0.0.1:5100/result_main',
      headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}   
    }).then((response)=>{
      console.log(response)
      setResult(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const intro =async()=>{
    await axios({
      method:'get',
      url:'http://127.0.0.1:5100/',
      headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}   
    }).then((response)=>{
      console.log(response)
      setStart(true)
      setPose(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <div>
                {pose==='T Pose'&&<img src={T} width='100%' height='600px'/>}
                {pose==='Tree Pose'&&<img src={Tree} width='100%' height='600px'/>}
                {pose==='Warrior Pose'&&<img src={Warrior} width='100%' height='600px'/>}
                <img src="http://localhost:5100/move_main" width="100%"></img>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {result===0&&
            <img src="http://localhost:5100/pose_main" width="100%" height='880px'></img>
            }
            {
              result>=75&&
              <div>
                <h1>{result}점</h1>
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
            {
              (result>=50 && result<75) &&
              <div>
                <h1>{result}점</h1>
                <img src={soso} width="100%" />
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
            {
              (result<50&&result!=0) &&
              <div>
                <h1>{result}점</h1>
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
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {sound===false&&<img src={yeongheeback} alt="관리자" width="100%"></img>}
            {sound===true&&<img src={yeongheefront} alt="관리자" width="100%"></img>}
            {result===0&&
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
              onClick={() => {navigate("/retry")
            refreshPage()}}
            >
              그만!
            </button>}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MugungwhaGame;
