import React from "react";
import managerImage from "../img/manager.png";
import { StyledButton } from "../components/Styled";
import { useNavigate } from "react-router-dom";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  paper: {
    minHeight:'100%',
    padding: theme.spacing(2),
    alignItems: "center",
    display:'flex',
    justifyContent:'center',
    backgroundColor: 'black',
    color: theme.palette.text.secondary
  },
  paperButton: {
    minHeight:'100%',
    padding: theme.spacing(2),
    alignItems: "center",
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    backgroundColor: 'black',
    color: theme.palette.text.secondary
  },
}));

const GameSelect = ({ props }) => {
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
          <button
            style={{
              width: "60%",
              height: "70px",
              borderRadius: "10px",
              marginTop: "70px",
              marginBottom: "50px",
              marginLeft: "50px",
              marginRight: "50px",
              fontSize: "50px",
              fontFamily:'koryeo',
              fontWeight:'bold',
              backgroundColor: "#e6ebce",

            }}
            onClick={() => {
              navigate("/mugungwhaintro");
            }}
          >
            무궁화 꽃이 피었습니다
          </button>
          <button
            style={{
              width: "60%",
              height: "70px",
              borderRadius: "10px",
              margin: "50px",
              fontSize: "50px",
              fontFamily:'koryeo',
              fontWeight:'bold',
              backgroundColor: "#e6ebce",
            }}
            onClick={() => {
              navigate("/dalgonaintro");
            }}
          >
            달고나 게임
          </button>
          <button
            style={{
              width: "60%",
              height: "70px",
              borderRadius: "10px",
              margin: "50px",
              fontSize: "50px",
              fontWeight:'bold',
              fontFamily:'koryeo',
              backgroundColor: "#e6ebce",
            }}
            onClick={() => {
              navigate("/rspintro");
            }}
          >
            가위바위보
          </button>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
};

export default GameSelect;
