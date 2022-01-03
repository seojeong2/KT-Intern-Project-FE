import React, { useEffect, useState } from "react";
import yeongheefront from "../img/yeongheefront.png";
import yeongheeback from "../img/yeongheeback.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/Styled";
import T from '../img/TPose.jpeg'
import Tree from '../img/Tree.jpg'
import Warrior from '../img/Warrior.jpg'
import music from '../sound/assets_sound.wav'
import axios from 'axios'
import great from '../img/great.png';
import soso from '../img/soso.png';
import { SettingsPowerSharp } from "@material-ui/icons";
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
  useEffect(()=>{
    setResult(0)
    setInterval(function(){
      ff()
      setData(data+1)
      if(result===1||result===2||result===3){
        clearInterval()
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
              result===1&&
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
            setResult(0)}}>종료</button>
            </div>
            }
            {
              result===2&&
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
            setResult(0)}}>종료</button>
            </div>
            }
            {
              result===3&&
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
            setResult(0)}}>종료</button>
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
              setResult(0)}}
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
