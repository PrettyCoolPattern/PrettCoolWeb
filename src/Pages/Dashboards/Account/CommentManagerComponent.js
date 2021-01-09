import React, { Component, Fragment, useEffect } from "react";
import { compose, graphql } from "react-apollo";

import axios from "axios";
import { idText } from "typescript";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

class CommentManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
    };
  }
  render() {
    this.state.authVar = axios
      .get(`https://api.microHawaii.com/micro-comments`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        if (res.err == null) {
        }
        let concData = "";
        for (var i = 0; i < JSON.parse(JSON.stringify(res.data)).length; i++) {
          concData =
            concData +
            "\r\n " +
            String(JSON.parse(JSON.stringify(res.data))[i].name) +
            " " +
            String(JSON.parse(JSON.stringify(res.data))[i].comment);
          this.state.textVar = concData
            .split("\n")
            .map((str) => <h5 key={str}>{str}</h5>);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return this.state.textVar;
  }
}
export default CommentManagerComponent;
