import React from "react";

import classes from "./About.module.scss";

import cv from "../../docs/cvManzi.pdf";

export default class DownloadBtn extends React.Component {
  //   componentDidMount() {
  //     document.getElementById("downloadLink").click();
  //     window.close();
  //   }
  render() {
    return (
      <>
        <a
          href={cv}
          id="downloadLink"
          download="ManzarazDev.pdf"
          className={classes.a__left__btnCv}
          target="_blank"
          rel="noreferrer"
        >
          {this.props.name}
        </a>
      </>
    );
  }
}
