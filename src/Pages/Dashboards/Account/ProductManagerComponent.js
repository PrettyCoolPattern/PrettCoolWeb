import React, { Component, Fragment, useEffect } from "react";
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
import { idText } from "typescript";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

class ProductManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
    };
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

  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  render() {
    return (
      <Fragment>
        <CardHeader> PCP Product Adder</CardHeader>
        <CardBody>
          <p></p>
          <button> Load Newest ID</button> <br />
          ID #: &nbsp;<input disabled></input> <br />
          Title : &nbsp;<input></input> <br />
          Sizes: &nbsp;<input></input> <br />
          Shop: &nbsp;<input></input> <br />
          Price: &nbsp;<input></input> <br />
          <p></p>
          <button> Initialize Product</button> <br />
        </CardBody>
        <h2> Status: Pending</h2>
        <div className="App">
          <br />
          <Form onSubmit={this.onSubmit}>
            File Upload:<br></br>{" "}
            <Input
              type="file"
              enctype="multipart/form-data"
              name="apiup"
              id="apiupform"
              onChange={this.onImageChange}
              alt="image"
            />
            <br />
            <br />
            <div>
              <Button
                style={{
                  alignSelf: "center",
                  display: "block",
                  position: "relative",
                  width: "100%",
                }}
                type="submit"
              >
                Send Image
              </Button>
            </div>
          </Form>
          <br />
        </div>
      </Fragment>
    );
  }
}
export default ProductManagerComponent;
