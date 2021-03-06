import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import axios from "axios";
import great from "../img/great.jpeg";
import fail from "../img/fail.png";
import cir from "../img/cir.png";
import squ from "../img/squ.jpeg";
import tri from "../img/tri.jpeg";
import { HeadTitle } from "../components/Styled";
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
    backgroundColor: "white",
    color: theme.palette.text.secondary,
  },
  paperButton: {
    minHeight: "100%",
    padding: theme.spacing(2),
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    color: theme.palette.text.secondary,
  },
}));

const DbdbdipGame = ({ props }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);

  const refreshPage = () => {
    setResult(0);
    setAnswer(0);
    window.location.reload();
  };
  useEffect(() => {
    setTimeout(function () {
      ff();
      if (result === 0) {
        setData(data + 1);
      }
    }, 5000);
  }, [data]);
  useEffect(() => {
    setTimeout(function () {
      ans();
    }, 4000);
  }, []);
  const ff = async () => {
    await axios({
      method: "get",
      url: "http://127.0.0.1:5500/result",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log("result" + response.data);
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const ans = async () => {
    await axios({
      method: "get",
      url: "http://127.0.0.1:5500/answer",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log("answer" + response.data);
        setAnswer(response.data);
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
            {result === 0 && (
              <div>
                <HeadTitle style={{ color: "black" }}> ???????????????! </HeadTitle>
              </div>
            )}
            {result > 0 && (
              <div>
                {answer === 1 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <HeadTitle style={{ color: "black" }}> ????????? </HeadTitle>
                    <img src={cir} width="100%"></img>
                  </div>
                )}
                {answer === 2 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <HeadTitle style={{ color: "black" }}> ????????? </HeadTitle>
                    <img src={squ} width="100%"></img>
                  </div>
                )}
                {answer === 3 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <HeadTitle style={{ color: "black" }}> ????????? </HeadTitle>
                    <img src={tri} width="100%"></img>
                  </div>
                )}
              </div>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperButton}>
            {result === 0 && data < 4 && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>3??? ?????? ?????? ????????? ????????? ?????????</h1>
                <img src="http://127.0.0.1:5500/video_feed" width="100%"></img>
                <button
                  style={{
                    width: "140px",
                    height: "70px",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    fontSize: "35px",
                    borderRadius: "20px",
                    color: "white",
                    fontFamily: "koryeo",
                  }}
                  onClick={() => {
                    navigate("/retry");
                    refreshPage();
                  }}
                >
                  ??????!
                </button>
              </div>
            )}
            {result === 1 && (
              <div>
                <img src={fail} width="100%" />
                <button
                  style={{
                    width: "140px",
                    height: "70px",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    fontSize: "35px",
                    borderRadius: "20px",
                    color: "white",
                    fontFamily: "koryeo",
                  }}
                  onClick={() => {
                    navigate("/retry");
                    refreshPage();
                  }}
                >
                  ??????
                </button>
              </div>
            )}
            {result === 2 && (
              <div>
                <img src={great} width="100%" />
                <button
                  style={{
                    width: "140px",
                    height: "70px",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    fontSize: "35px",
                    borderRadius: "20px",
                    color: "white",
                    fontFamily: "koryeo",
                  }}
                  onClick={() => {
                    navigate("/retry");
                    refreshPage();
                  }}
                >
                  ??????
                </button>
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DbdbdipGame;
