import React from "react";
import managerImage from "../img/circle_right.png";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    alignItems:'center',
    flexGrow: 1
  },
  paper: {
    height: 500,
    padding: theme.spacing(2),
    textAlign: "center",
    alignItems:'center'
  }
}));
const Manual = ({ props }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
          <img
          src={managerImage}
          alt="오징어게임 관리자"
          position={"absolute"}
          height={"100%"}
        ></img>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Manual;
