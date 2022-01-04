import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import squidManager from "../img/circle_left.png";
import axios from "axios";
import { useSelector } from "react-redux";
import great from "../img/great.jpeg";
import soso from "../img/soso.jpeg";
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

const DalgonaGame = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [result, setResult] = useState(0);
  const [data, setData] = useState(0);

  const { username } = useSelector((state) => ({
    username: state.username,
  }));

  const refreshPage = () => {
    window.location.reload();
  };
  
 useEffect(()=>{
  setTimeout(function(){
    ff()
    if(result===0){
      setData(data+1)
    }
  },4000)
},[data])
  
  const ff = async () => {
    await axios({
      method: "get",
      url: "http://127.0.0.1:5000/rr",
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
  const sendResult = async () => {
    await axios({
      method: "post",
      url: "http://172.30.1.42:8080/api/Dalgona",
      data: { username: username, score: parseInt(result) },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            {result === 0 && <img src="http://127.0.0.1:5000/video_feed" width="100%" />}
            {result >=85 && (
              <div>
                <h1>{result}점</h1>
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
                    sendResult();
                    navigate("/retry");

                    refreshPage();
                  }}
                >
                  종료
                </button>
              </div>
            )}
            {(result >=75 && result<85) && (
              <div>
                <h1>{result}점</h1>
                <img src={soso} width="100%" />
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
                    sendResult();
                    navigate("/retry");
                    refreshPage()
                  }}
                >
                  종료
                </button>
              </div>
            )}
            {(result<75&&result>0)&& (
              <div>
                <h1>{result}점</h1>
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
                  종료
                </button>
              </div>
            )}
            {result === 3 ||
              (result === 4 && (
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
                      sendResult();
                      navigate("/retry");

                      refreshPage();
                    }}
                  >
                    종료
                  </button>
                </div>
              ))}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src="http://127.0.0.1:5000/video_feed1" width="100%" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img src={squidManager} alt="관리자" width="100%"></img>
            {result === 0 && (
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
                  sendResult();
                  navigate("/retry");

                  refreshPage();
                }}
              >
                그만!
              </button>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DalgonaGame;
