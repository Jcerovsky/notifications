import React from "react";
import ReactDOM from "react-dom/client";
import Notification from "./Notification.tsx";
import "./index.css";

const photoUrl =
  "https://media.licdn.com/dms/image/D5603AQHAqDtVl2bdfw/profile-displayphoto-shrink_800_800/0/1681970286455?e=2147483647&v=beta&t=_yNs-pSFgUUZMpZrrugrrtriyuG5wnlBvMhBu2d00Ks";

const onDecision = (decision: "yes" | "no"): void => {
  console.log(decision);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Notification
      onDecision={onDecision}
      photoUrl={photoUrl}
      text={"Jakub Cerovský je frajer, je to pravda?"}
      showFooter={true}
    />
  </React.StrictMode>,
);
