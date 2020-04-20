/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardSupport from "./CardSupport";
import Typography from "@material-ui/core/Typography";
import { db } from "../Firebase/Firebase";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import "./style.css";

const firestore = db.collection("support");
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 600,
    marginLeft: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  pos: {
    marginBottom: 5,
    margin: 5,
  },
  trash: {
    background: "white",
    height: 20,
    // borderRadius: "100%",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    firestore.onSnapshot((result) => {
      const data = result.docs.map((res) => ({
        id: res.id,
        ...res.data(),
      }));
      setUser(data);
      console.log(data);
    });
  }, []);

  function SubmitModal(item) {
    confirmAlert({
      title: "Deseja finalizar?",
      message: "Esse usúario será excluído no Bando de dados.",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            trashUser(item);
          },
        },
        {
          label: "Não",
          onClick: async () => {},
        },
      ],
    });
  }
  function modalAlert(item) {
    confirmAlert({
      title: "Usuário exlcuído!",
      message: "Sucesso!",
      buttons: [
        {
          label: "OK",
          onClick: async () => {},
        },
      ],
    });
  }

  const trashUser = async (item) => {
    console.log(item);
    // DELETE FROM USER
    // firestore.doc(item).delete();
    setTimeout(() => {
      modalAlert();
    }, 5000);
  };

  return (
    <div className="container">
      <List
        className={classes.root}
        subheader={<li />}
        style={{
          border: "1px solid #ccc",
          background: "rgba(255, 255, 255, 0.718)",
        }}
      >
        <ul className={classes.ul}>
          {user.map((item) => (
            <ListItem key={item.id}>
              <label
                style={{
                  border: "1px solid #ccc",
                  margin: "5px",
                  borderRadius: "5px 40px 5px 5px",
                  width: "100%",
                  border: "5px inset #1c6ea4",
                }}
                className="signIn"
                onClick={() => {
                  setData(item);
                }}
              >
                <img
                  src={require("../assets/trash.png")}
                  className="iconTrash"
                  onClick={() => {
                    SubmitModal(item.id);
                  }}
                />
                <Typography className={classes.pos} color="textSecondary">
                  Nome: {item.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Data: {item.date}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Asunto: {item.title}
                </Typography>
              </label>
            </ListItem>
          ))}
        </ul>
      </List>

      <CardSupport data={data} />
    </div>
  );
}
