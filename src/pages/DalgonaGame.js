import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import squidManager from "../img/manager.png";

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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <VideoPlayer />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <VideoPlayer />
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
