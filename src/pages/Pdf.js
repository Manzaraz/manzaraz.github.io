/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import DeviceDetect from "../helpers/deviceDetect";
import cv from "./../img/cvManzi.pdf";

export default class PDFViewer extends React.Component {
  componentDidMount() {
    if (DeviceDetect === "Mobile") {
      document.getElementById("downloadLink").click();
      window.close();
    }
  }
  render() {
    return (
      <div
        id="viewer"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <object data={cv} type="application/pdf" width="100%" height="100%">
          <br />
          <a href={cv} id="downloadLink" download="ManzarazDev.pdf">
            Your device cannot display PDF files, please click here to download
          </a>
        </object>
      </div>
    );
  }
}
