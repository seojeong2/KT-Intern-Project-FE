import React, { useEffect } from "react";
import managerImage from "../img/manager.png";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import * as tf from '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';

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

const ChamchamchamGame = ({ props }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  let model, webcam, ctx, labelContainer, maxPredictions, answer, submit, timer;
  let start = 0;
  let correct;
  let count = 0;
  useEffect(()=>{
      init()
  },[])
  async function init() {
    const modelURL = "../my_model/model.json";
    const metadataURL = "../my_model/metadata.json";
    
    model = await tmPose.load(modelURL,metadataURL);
    console.log('이거',model)
    maxPredictions = model.getTotalClasses();

    const size = 200;
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);
    answer = Math.floor(Math.random() * 2)
    if(answer === 0){
        answer = "왼쪽"
    }
    else{
        answer = "오른쪽"
    }

    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < 6; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
    
}

async function loop(timestamp) {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    let max_num = 0.0
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {            
        if(prediction[i].probability.toFixed(2) > max_num){
            max_num = prediction[i].className
        }
    }
    labelContainer.childNodes[0].innerHTML = "답안 : " + String(answer)
    labelContainer.childNodes[1].innerHTML = String(max_num)
    if(start === 0){
        start = 1;
        timer = setTimeout(() => {
            submit = labelContainer.childNodes[1].innerHTML;
            if(submit === answer){
                correct = "실패"
            }
            else{
                correct = "성공"
                count += 1
            }
            setTimeout(() => {
                start = 0;
                answer = Math.floor(Math.random() * 2)
                if(answer === 0){
                    answer = "왼쪽"
                }
                else{
                    answer = "오른쪽"
                }
                submit = "none"
                correct = "none"
            }, 2000);
            

        }, 5000);
    }
    labelContainer.childNodes[2].innerHTML = "제출인식 : " + String(submit)
    labelContainer.childNodes[3].innerHTML = "결과 : " + correct
    labelContainer.childNodes[4].innerHTML = "성공횟수 : " + count
    if(correct === "실패"){
        //
    }

    // finally draw the poses
    drawPose(pose);
}

function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}
  return (
      
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={managerImage} alt="관리자" width="60%"></img>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperButton}>
          <div>Teachable Machine Pose Model</div>   
            <button onClick={()=>init()}>Start</button>
            <div><canvas id="canvas"></canvas></div>
            <div id="label-container"></div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChamchamchamGame;
