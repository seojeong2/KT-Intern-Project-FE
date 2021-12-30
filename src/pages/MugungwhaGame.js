import React from "react";
import VideoPlayer from "../components/VideoPlayer";

import yeongheefront from "../img/yeongheefront.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>동작</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoPlayer />
            <VideoPlayer />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img src={yeongheefront} alt="관리자" width="100%"></img>
            <Button
              variant="contained"
              color="secondary"
              marginTop="20px"
              onClick={() => navigate("/retry")}
            >
              그만하기
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MugungwhaGame;
