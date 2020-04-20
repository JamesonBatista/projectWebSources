import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function SubmitModal() {
  confirmAlert({
    title: "Confirm to submit",
    message: "Are you sure to do this.",
    buttons: [
      {
        label: "Sim",
        onClick: async () => {},
      },
      {
        label: "Não",
        onClick: async () => {},
      },
    ],
  });
}

export function modalAlert(title, menssage) {
  confirmAlert({
    title: `${title}`,
    message: `${menssage}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
  });
}

export function modalError(title, menssage) {
  confirmAlert({
    title: `${title}`,
    message: `${menssage}`,
    buttons: [
      {
        label: "OK",
        onClick: async () => {},
      },
    ],
    closeOnClickOutside: true,
  });
}
