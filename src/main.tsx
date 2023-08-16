import React from "react";
import ReactDOM from "react-dom/client";
import Notification from "./Notification.tsx";
import "./index.css";

const photoUrl = "https://avatars.githubusercontent.com/u/39205266?v=4";

const onDecision = (decision: "yes" | "no"): void => {
  console.log(decision);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Notification
      onDecision={onDecision}
      photoUrl={photoUrl}
      text={"Ahoj Marek! Chcel by si cukrik?"}
    />
  </React.StrictMode>,
);
