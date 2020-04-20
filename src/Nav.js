import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./assets/18162-rotating-sun.json";
import { useHistory } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const user = window.localStorage.getItem("userName");
function Nav() {
  const history = useHistory();

  const navStyle = {
    color: "transparent",
  };
  function SubmitModal(item) {
    confirmAlert({
      title: "Deseja finalizar sessão?",
      message: "Seu usuário será removido do sistema",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            exitSystem();
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
      title: "Registro limpo!",
      message: "Sucesso!",
      buttons: [
        {
          label: "OK",
          onClick: async () => {},
        },
      ],
    });
  }

  const exitSystem = () => {
    window.localStorage.clear();
    modalAlert();
    history.push("/");
    window.location.reload(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <nav>
        {user ? (
          <h3 className="operation">
            <img src={require("./assets/support.png")} className="icon" />
            {user}
          </h3>
        ) : null}
        <Lottie
          options={defaultOptions}
          height={100}
          width={100}
          style={{ position: "absolute", marginRight: "30%" }}
        />
        <ul className="nav-links">
          <Link to="/home" style={navStyle} className="home">
            <li className="li">
              {" "}
              HOME
              <img src={require("./assets/home.png")} className="icon" />
            </li>
          </Link>
          <Link to="/about" style={navStyle} className="chatline">
            <li className="li">
              CHAT-ONLINE
              <img src={require("./assets/whatsapp.png")} className="icon" />
            </li>
          </Link>
          <Link to="/shop" style={navStyle} className="shop">
            <li className="li">SHOP</li>
          </Link>

          <button className="buttonExit" onClick={() => SubmitModal()}>
            <img src={require("./assets/logout.png")} className="icon" />
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
