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

import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";


class ProductManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
    };
  }

  handleInputChange2(event) {
    this.setState({
      deleteIDVar: event.target.value,
    });
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
    let { formName, formDesc, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
      mutation DeleteChat {
        deletePcpProduct(input: { where: { id: ${this.state.deleteIDVar} } }) {
          pcpProduct {
            id
          }
        }
      }
    `;

    const MyMutationMutation = (props) => {
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : null;

              return (
                <button
                  onClick={() =>
                    MyMutation(formName + formDesc, Date().toString())
                  }
                >
                  Delete Product #
                </button>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };

    this.state.authVar = axios
      .get(`https://api.microHawaii.com/pcp-products`, {
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
            "\r\n ID#" +
            String(JSON.parse(JSON.stringify(res.data))[i].id) +
            "| " +
            String(JSON.parse(JSON.stringify(res.data))[i].ProductName) +
            " - " +
            String(JSON.parse(JSON.stringify(res.data))[i].Description) +
            " Image: " +
            process.env.REACT_APP_BACKEND_URL +
            String(JSON.parse(JSON.stringify(res.data))[i].Image[0].url);
          this.state.textVar = concData
            .split("\n")
            .map((str, index) => <h5 key={index}>{str}</h5>);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <Fragment>
        <CardHeader> PCP Product Adder</CardHeader>
        <CardBody>
          <span style={{ marginLeft: "2px", marginRight: "2px" }}>
            <div
              style={{
                boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
                marginRight: "5px",
                maxWidth: "375px",
              }}
            >
              <p></p>
              ID #: &nbsp;<input disabled></input> <br />
              Title : &nbsp;<input></input> <br />
              Description: &nbsp;<input></input> <br />
              Options: &nbsp;<input></input> <br />
              Category: &nbsp;<input></input> <br />
              Price: &nbsp;<input></input> <br />
              <p></p>
              <button> Initialize Product</button> <br />
              <h2> Status: Pending</h2>
              <div className="App">
                <br />
                <Form onSubmit={this.onSubmit}>
                  &nbsp;Product Image:<br></br>{" "}
                  <Input
                    type="file"
                    encType="multipart/form-data"
                    name="apiup"
                    id="apiupform4"
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
                </Form>{" "}
                <br />
                <input
                  type="number"
                  onChange={() => this.handleInputChange2(event)}
                  style={{ width: "50px" }}
                ></input>{" "}
                <MyMutationMutation />
                <br />
              </div>
              {this.state.textVar}
            </div>
          </span>
        </CardBody>
      </Fragment>
    );
  }
}
export default ProductManagerComponent;
