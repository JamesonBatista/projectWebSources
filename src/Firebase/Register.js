import { db } from "../Firebase/Firebase";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
var getStorage = window.localStorage;
var setStorage = window.localStorage;
async function NewUser(email, password, name) {
  return db.app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      res.user.updateProfile({ displayName: name });
      setTimeout(() => {
        setStorage.setItem("userLogin", res.user.email);
        setStorage.setItem("userName", res.user.displayName);
      }, 2000);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/wrong-password":
          modalError("Senha incorreta!");
          break;
        case "auth/email-already-in-use":
          modalError("Usuário já existe!");
          break;
        case "auth/invalid-email":
          modalError("Formato de E-mail inválido!");
          break;
        case "auth/weak-password":
          modalError("Senha precisa ter no mínimo 6 caracteres.");
          break;

        default:
          modalError("Erro desconhecido.");

          break;
      }
    });
}
export default NewUser;

export function LoginUser(email, password) {
  return db.app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      setTimeout(() => {
        setStorage.setItem("userLogin", res.user.email);
        setStorage.setItem("userName", res.user.displayName);
      }, 3000);
      modalAlert(res.user.displayName);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/wrong-password":
          modalError("Senha incorreta!");
          break;
        case "auth/user-not-found":
          modalError("Usuário não existe!");
          break;
        case "auth/invalid-email":
          modalError("Formato de E-mail inválido!");
          break;

        default:
          modalError("Erro desconhecido.");

          break;
      }
    });
}
function modalAlert(name) {
  confirmAlert({
    title: "Sucesso!",
    message: `Usuário conectado, bem vindo(a)  ${name}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
  });
}
function modalError(erro) {
  confirmAlert({
    title: "Error!",
    message: `Encontramos um erro: ${erro}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
  });
}
