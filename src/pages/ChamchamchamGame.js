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
            <iframe src={"http://127.0.0.1:8887/"} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChamchamchamGame;
