import React from "react";
import ReactDOMClient from "react-dom/client";
import { Mvp } from "./screens/Mvp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Mvp />);
