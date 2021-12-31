import React from "react";
import managerImage from "../img/manager.png";
import { useNavigate } from "react-router-dom";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
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
  paperx: {
    minHeight: "100%",
    padding: theme.spacing(2),
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    fontFamily: "koryeo",
  },
}));

const Manual = ({ props, text }) => {
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
          <Paper className={classes.paperx}>
            <div
              className="RightContainer"
              style={{
                width: "60%",
                //height: "100vh",
                margin: "50px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                //backgroundColor: "blue",
              }}
            >
              <div style={{ fontSize: "100px", color: "black" }}>게임 설명</div>
              <div style={{ marginTop: "50px", fontSize: "50px" }}>{text}</div>

              <button
                style={{
                  width: "150px",
                  height: "100px",
                  marginTop: "500px",
                  borderRadius: "40px",
                  marginLeft: "80%",
                  fontWeight: "bold",
                  backgroundColor: "green",
                  fontFamily: "koryeo",
                  fontSize: "50px",
                }}
                onClick={() => {
                  navigate(props);
                }}
              >
                시작
              </button>
            </div>{" "}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Manual;
