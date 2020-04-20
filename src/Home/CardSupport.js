/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { db } from "../Firebase/Firebase";
const firestore = db.collection("support");

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    width: 700,
    marginLeft: 20,
    maxHeight: 800,
    marginTop: 10,
    justifyContent: "flex-start",
    background: "rgba(255, 255, 255, 255)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  header: {
    fontSize: 30,
    borderBottom: "1px solid gray",
  },
  pos: {
    marginBottom: 10,
    fontSize: 30,
  },
  information: {
    fontSize: 12,
    fontWeight: "bold",
    borderBottom: "1px solid #ced4da",
    marginBottom: 30,
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textlabel: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 30,
    color: "red",
  },
  actionButtom: {
    justifyContent: "flex-end",
  },
  title: {
    display: "flex",
    borderBottom: "1px solid gray",
  },
  message: {
    border: "1px solid #ced4da",
    maxHeight: 200,
    height: 150,
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
  },
  actionOne: {
    // marginRight: 100,
    marginTop: 10,
    margin: 10,
    background: "green",
    color: "white",
    fontWeight: "bold",
  },
  textInput: {
    marginTop: 20,
    marginBottom: 0,
    width: "100%",
    height: "100%",
  },
  inputSelect: {
    top: -10,
  },
});
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      border: "1px solid #ced4da",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default function CardSupport(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const {
    title,
    message,
    id,
    date,
    name,
    phone,
    adress,
    complement,
  } = props.data;

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const valueButton = () => {
    if (age && text) {
    } else {
      modalAlert(`Preencha o Status ou o Comentário do Incidente`);
    }
    console.log(age);
    console.log(text);
  };
  const valueInput = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  function OptionsChange() {
    return (
      <div className="selection">
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            Status
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            className={classes.inputSelect}
          >
            <option aria-label="None" value="" />
            <option value="Aberto">Aberto</option>
            <option value="Atendimento">Atendimento</option>
            <option value="Resolvido">Resolvido</option>
            <option value="Suporte N1">Suporte N1</option>
          </NativeSelect>
        </FormControl>
        <Button
          className={classes.actionOne}
          variant="contained"
          onClick={() => {
            valueButton();
          }}
        >
          SAVE
          <img
            src={require("../assets/check.png")}
            style={{
              padding: "8px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "5px",
            }}
          />
        </Button>
      </div>
    );
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.header}
          color="textSecondary"
          gutterBottom
        >
          <img src={require("../assets/docs.png")} />
          Relatório do Chamado
        </Typography>
        {adress ? (
          <Typography
            className={classes.information}
            component="h6"
            variant="h6"
            color="textSecondary"
          >
            <ul className="informationUser">
              <li className="informationText">CONTATO: {phone} </li>
              <li className="informationText">ENDEREÇO: {adress} </li>
              <li className="informationText">
                COMPLEMENTO: <i> {complement} </i>
              </li>
            </ul>
          </Typography>
        ) : null}

        <Typography variant="h5" component="h2" className={classes.title}>
          <img
            src={require("../assets/title.png")}
            style={{ padding: "5px" }}
          />
          TITLE: {title}
        </Typography>

        <br />

        <Typography className={classes.pos} color="textSecondary">
          <img src={require("../assets/chat.png")} />
          Mensagem
        </Typography>
        <Typography variant="h6" component="h4" className={classes.message}>
          {message}
        </Typography>

        <TextField
          required
          id="filled-required"
          label="Comentário do Incidente..."
          defaultValue=""
          variant="filled"
          className={classes.textInput}
          onChange={valueInput}
        />
      </CardContent>
      <CardActions className={classes.actionButtom}>
        <OptionsChange />
      </CardActions>
    </Card>
  );
}
function modalAlert(item) {
  confirmAlert({
    title: "Ops, algo de errado!",
    message: `${item}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
  });
}
