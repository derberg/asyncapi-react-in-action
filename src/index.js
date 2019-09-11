import React from "react";
import ReactDOM from "react-dom";
import AsyncApiComponent from "@kyma-project/asyncapi-react";

import { specMock } from "./mock";
import { theme } from "./theme";
import "./styles.css";

const App = () => <AsyncApiComponent schema={specMock} theme={theme} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
