import React, { useState, useEffect } from "react";
import FreeScrollBar from "react-free-scrollbar";
import "./style.css";
import { db } from "../Firebase/Firebase";

const firestore = db.collection("chat");

export default function chatOnline(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  const { name, id } = props.data;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (id) {
      firestore
        .doc(id)
        .collection(id)
        .onSnapshot((result) => {
          const response = result.docs.map((res) => ({
            id: res.id,
            ...res.data(),
          }));
          setData(response);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    ChangeMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ChangeMessage = () => {
    let dados = data.slice().sort((x, y) => x.date - y.date);
    console.log(dados);
    return (
      <div>
        {dados.map((item, index) => {
          return (
            <li key={item.id} className="textOne">
              {item.message}
            </li>
          );
        })}
      </div>
    );
  };

  const onChangeMessage = (event) => {
    event.preventDefault();

    const [input] = event.target.children;

    if (input.value && id) {
      const num = data.length + 1;
      console.log(num);
      firestore.doc(id).collection(id).add({
        name: "operation",
        date: num,
        message: input.value,
      });
      event.target.reset();
    } else {
      alert("Digite alguma mensagem!");
    }
  };

  return (
    <div className="chatUser">
      <div className="textTitle">
        <h1 className="titleUser">{name}</h1>
      </div>
      <div className="chatOnline">
        <FreeScrollBar>
          <div className="messageUser">
            <ChangeMessage />
          </div>
        </FreeScrollBar>
        <div className="inputMessage">
          <form onSubmit={onChangeMessage} className="form">
            <input
              type="textx"
              placeholder="Mensagem..."
              className="inputChange"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
