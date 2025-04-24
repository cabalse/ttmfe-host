import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HostApp from "./components/host-app";
// import HostAppSimpler from "./components/host-app-simpler";

import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HostApp />
  </StrictMode>
);
