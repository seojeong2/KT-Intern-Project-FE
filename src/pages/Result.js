import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeadTitle } from "../components/Styled";
import { GameListButton } from "../components/Styled";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import managerImage from "../img/manager.png";
import axios from "axios";

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

const Result = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [dalgonResult, setDalgonaResult] = useState([]);
  const [mugungResult, setMugungResult] = useState([]);
  useEffect(() => {
    getResultDalgona();
    getResultMugung();
  }, []);

  const getResultDalgona = async () => {
    await axios({
      method: "get",
      url: "http://172.30.1.3:8080/api/readRankDalgona",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
        setDalgonaResult(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const getResultMugung = async () => {
    await axios({
      method: "get",
      url: "http://172.30.1.3:8080/api/readRankMugungwha",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
        setMugungResult(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const dalgonaList = dalgonResult.map((result, index) => (
    <GameListButton style={{ margin: "10px" }} key={index}>
      {index + 1}위 {result.username} : {result.score}
    </GameListButton>
  ));
  const mungungList = mugungResult.map((result, index) => (
    <GameListButton style={{ margin: "10px" }} key={index}>
      {index + 1}위 {result.username} : {result.score}
    </GameListButton>
  ));

  return (
    <div>
      <HeadTitle style={{ marginBottom: "0px", fontSize: "100px" }}>
        랭킹 보기~
      </HeadTitle>
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
          marginBottom: "30px",
          marginTop: "20px",
        }}
        onClick={() => {
          navigate("/select");
        }}
      >
        게임으로!
      </button>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paperButton}>
            <HeadTitle style={{ marginBottom: "5px", fontSize: "50px" }}>
              무궁화 게임
            </HeadTitle>
            {mungungList}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperButton}>
            <HeadTitle style={{ marginBottom: "5px", fontSize: "50px" }}>
              달고나 게임
            </HeadTitle>
            {dalgonaList}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Result;
