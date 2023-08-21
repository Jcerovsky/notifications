import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Notifications from "./Notifications";
import { NotificationProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotificationProvider>
      <Notifications />
    </NotificationProvider>
  </React.StrictMode>,
);
