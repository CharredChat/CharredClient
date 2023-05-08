import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import { SettingsManager } from "tauri-settings";

const settingsManager = new SettingsManager({
  serverAddress: "ws://127.0.0.1:8080/ws",
});

settingsManager.initialize().then(() => {
  settingsManager
    .get("serverAddress")
    .then((serverAddress) => {
      console.log(serverAddress);
      ReactDOM.createRoot(document.getElementById("root")).render(
        <AnimatePresence>
          <App server={serverAddress} />
        </AnimatePresence>
      );
    })
    .catch((e) => {
      console.trace(e);
    });
});
