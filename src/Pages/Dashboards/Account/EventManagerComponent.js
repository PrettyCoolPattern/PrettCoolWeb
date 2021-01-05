import React, { Component, Fragment, useState } from "react";
import { compose, graphql } from "react-apollo";

import {
  Row,
  Col,
  Button,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardTitle,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import axios from "axios";
import Calendar from "react-calendar";
import "../../../assets/components/Calendar.css";
class EventManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
    };
    this.startTimer = this.startTimer.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (this.state.images != null) {
      document.getElementById("apiupform").hidden = true;

      Array.from(this.state.images).forEach((image) => {
        formData.append("files", image);
      });

      formData.Title = "asdf";
      formData.Sizes = "asdf";
      formData.Shop = "asdf";
      formData.Price = "asdf";
      formData.Image = this.state.images[0];
      console.log(formData);

      axios
        .post(
          `https://api.microhawaii.com/pcp-products`,
          JSON.stringify(formData),
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          if (res.err == null) {
            alert("Success!");
            document.getElementById("apiupform").hidden = false;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  startTimer() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        console.log("B");
        this.setState({
          timeNow: Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(Date.now()),
        }),
          1000;
      }, setState(nextState, callback));
    }
  }

  stopTimer() {
    clearInterval(this.timerId);
  }
  componentDidMount() {}
  componentDidUnmount() {
    this.stopTimer;
  }
  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  render() {
    return (
      <Fragment>
        <CardHeader> PCP Event Manager</CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            <p>
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(Date.now())}
            </p>
          </div>{" "}
          [ Load Event Data Here]
          <br />
          <input style={{ width: "50px" }}></input> &nbsp;
          <button> Delete Event #</button> <br />
          <br />
          <span className="calendarVar">
            <Calendar
              className="calendarVar"
              onChange={(e) => this.setState({ set: e })}
            />
          </span>{" "}
          <br />
          Add Data to Date:
          <Input
            disabled
            value={this.state.set}
            style={{ width: "100%", top: "15px", position: "relative" }}
            type="text"
          ></Input>{" "}
          <br /> Description:
          <Input
            style={{ top: "15px", position: "relative" }}
            type="textarea"
          ></Input>{" "}
          &nbsp;
          <button> Add</button> <br />
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default EventManagerComponent;
