import { StrictMode } from "react";
import ReactDOM from "react-dom";

import UploadPage from "./UploadPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UploadPage />
  </StrictMode>,
  rootElement
);
