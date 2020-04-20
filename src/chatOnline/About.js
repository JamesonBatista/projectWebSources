/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "react-awesome-button/dist/styles.css";
import { LoopCircleLoading } from "react-loadingg";
import FreeScrollBar from "react-free-scrollbar";
import { db } from "../Firebase/Firebase";
import "./style.css";
import UserChat from "./UserChat";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const firestore = db.collection("chat");

function About() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    firestore.onSnapshot((result) => {
      const data = result.docs.map((res) => ({
        id: res.id,
        ...res.data(),
      }));
      setUser(data);
      document.title = `CHAT - ${data.length}`;
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

  const trashUser = (item) => {
    setAlert(true);

    //DELETE FROM USER
    firestore.doc(item).delete();
    setTimeout(() => {
      setAlert(false);
      modalAlert();
    }, 5000);
    setAlert(false);
  };

  return (
    <div className="container">
      {alert ? <LoopCircleLoading size="large" /> : null}
      <div className="chat">
        <FreeScrollBar>
          {user.map((item) => (
            <div className="users" onClick={() => setData(item)} key={item.id}>
              <img src={item.image} alt="" className="imgUser" />
              <h3 className="name">{item.name}</h3>
              <img
                className="trashIcon"
                src={require("../assets/trash.png")}
                onClick={() => {
                  SubmitModal(item.id);
                }}
              />
            </div>
          ))}
        </FreeScrollBar>
      </div>
      <UserChat data={data} />
    </div>
  );
}

export default About;
