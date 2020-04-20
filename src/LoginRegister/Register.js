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
import { useHistory } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import dateHour from "../components/dateHour";
import NewUser from "../Firebase/Register";

var getStorage = window.localStorage;

function Copyright() {
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
      style={{ fontWeight: "bold", fontSize: "20px", paddingBottom: "10%" }}
      align="center"
    >
      {date}
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
    margin: theme.spacing(3, 0, 2),
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

export default function RegisterNewUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alertm, setAlertm] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const changeName = (e) => {
    e.preventDefault();
    const formName = e.target.value;
    setName(formName);
  };

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
    setAlertm(true);
    e.preventDefault();
    if (email && password && name) {
      await NewUser(email, password, name);

      setTimeout(() => {
        const user = getStorage.getItem("userName");
        if (user) {
          setAlertm(false);
          console.log(user);
          modalAlert(`Seu Usuário foi criado, Bem vindo  ${user}!`);
          history.push("/home");
          window.location.reload(false);
        }
      }, 7000);
    } else {
      modalConfirm("Você deixou algum campo em branco ou inválido!");
      setAlertm(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.full}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{<LockOutlinedIcon />}</Avatar>
        <Typography component="h1" variant="h5" className={classes.signIn}>
          Register System
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={changeName}
          />
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
          {alertm ? <LoopCircleLoading /> : null}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitButton}
          >
            Register
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
function modalAlert(name) {
  confirmAlert({
    title: "Sucesso!",
    message: `${name}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
  });
}
function modalConfirm(confirm) {
  confirmAlert({
    title: "Opa!",
    message: ` ${confirm}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
  });
}
