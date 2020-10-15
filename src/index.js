import React from "react";
import ReactDOM from "react-dom";
import AsyncApiComponent from "@kyma-project/asyncapi-react";

import { specMock } from "./mock";
import "@kyma-project/asyncapi-react/lib/styles/fiori.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<AsyncApiComponent schema={specMock} />, rootElement);
