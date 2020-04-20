import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LoopCircleLoading } from "react-loadingg";
import dateHour from "../components/dateHour";
import { LoginUser } from "../Firebase/Register";
import { useHistory } from "react-router-dom";
import RegisterNewUser from "./Register";

import "./style.css";

function Copyright() {
  const user = window.localStorage.getItem("userName");

  const [date, setDate] = useState("");
  useEffect(() => {
    setInterval(() => {
      setDate(dateHour());
    }, 1000);
  }, []);
  return (
    <Typography
      variant="body2"
      color="textSecundary"
      style={{ fontWeight: "bold", fontSize: "20px", paddingBottom: "20%" }}
      align="center"
    >
      {date}
      <Typography>
        {user ? (
          <li>
            {`Seja Bem vindo  ${user}`}
            <img
              src={require("../assets/check.png")}
              style={{ marginLeft: "10px" }}
            />
          </li>
        ) : (
          <li>
            Você não está Logado
            <img
              src={require("../assets/cancel.png")}
              style={{ marginLeft: "10px" }}
            />
          </li>
        )}
      </Typography>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(7, 0, 1),
  },
  register: {
    margin: theme.spacing(4, 0, 1),
  },
  signIn: {
    fontWeight: "bold",
  },
  full: {
    borderRadius: "10px",
    boxShadow: "0 25px 50px -12px rgb(255, 255, 255)",
    background: "rgba(255, 255, 255, 0.639)",
  },
}));

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertm, setAlertm] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  const changeEmail = (e) => {
    e.preventDefault();
    const formEmail = e.target.value;
    setEmail(formEmail);
  };
  const changePasssword = (x) => {
    x.preventDefault();
    const formPass = x.target.value;
    setPassword(formPass);
  };
  const submitButton = async (e) => {
    e.preventDefault();

    setAlertm(true);

    if (email && password) {
      await LoginUser(email, password);

      history.push("/home");

      setTimeout(() => {
        const user = window.localStorage.getItem("userName");
        console.log(user);
        if (user) {
          setAlertm(false);
          window.location.reload(false);
        }
      }, 4000);
    } else {
      alert("Você deixou algum campo em branco ou inválido!");
      setAlertm(false);
    }
  };

  return (
    <div className="container">
      <Container component="main" maxWidth="xs" className={classes.full}>
        {alertm ? <LoopCircleLoading /> : null}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>{<LockOutlinedIcon />}</Avatar>
          <Typography component="h1" variant="h5" className={classes.signIn}>
            Login System
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => changePasssword(e)}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitButton}
            >
              Login
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      <RegisterNewUser />
    </div>
  );
}
