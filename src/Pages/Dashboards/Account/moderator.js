/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/

import React, { Component, Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";
import { gql, useQuery } from "@apollo/client";
import axios from "axios";

import FormQueryComponent from "./FormQueryComponent.js";
import UserQueryComponent from "./UserQueryComponent.js";
import { toInteger } from "lodash";
import ProductManagerComponent from "./ProductManagerComponent.js";
import ChatManagerComponent from "./ChatManagerComponent.js";
import ContentManagerComponent from "./ContentManagerComponent.js";
import EventManagerComponent from "./EventManagerComponent.js";
import NoteManagerComponent from "./NoteManagerComponent.js";

import classnames from "classnames";

import PayPalButton from "../Shop/PayPalExpress";
import TextareaAutosize from "react-textarea-autosize";
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
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { relative } from "path";
import LoginPageElements from "./loginPage";
import AccountElements from "./account";
import { resolveModuleName } from "typescript";
import { get, initial } from "lodash";

// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.microhawaii.com/graphql",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }),
});
const MY_QUERY_COPY_QUERY = gql`
  query MyQuery {
    microComments {
      name
      comment
    }
  }
`;
let respData = "";
const MyQueryCopyQuery = (props) => {
  return (
    <Query query={MY_QUERY_COPY_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <pre>Loading</pre>;
        if (error)
          return (
            <pre>
              Error in MY_QUERY_COPY_QUERY
              {JSON.stringify(error, null, 2)}
            </pre>
          );
        if (data) {
          <pre>
            {
              //JSON DATA
              (respData = JSON.stringify(data.microComments, null, 1))
            }
          </pre>;

          return null;
        }
      }}
    </Query>
  );
};

export default class ModeratorElements extends Component {
  constructor(props) {
    super(props);
    this.setMutation = this.setMutation.bind(this);
    this.state = {
      formName: [],
      formEmail: "",
      token: "",
      authVar: "",
      ponoMapDATA: "Loading...",
      formMessage: "",
      intervalID2: "",
      activeTab: "1",
      activeTab2: "2",
      cartItems: "x",
      cart: ["x", "y"],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
    this.getData = this.getData.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }
  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (this.state.images != null) {
      var form = document.getElementById("apiupform");
      document.getElementById("apiupform").hidden = true;
      this.valueCheck = this.valueCheck.bind(this);
      Array.from(this.state.images).forEach((image) => {
        formData.append("files", image);
      });

      axios
        .post(`https://api.microhawaii.com/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
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
  handleInputChange(event) {
    this.setState({
      formName: event.target.value,
    });
  }
  handlePriceInputChange(event) {
    localStorage.setItem(
      "localData7",
      event.target.value - localStorage.getItem("localData4")
    );
    this.setState({
      adminPrice: event.target.value,
    });
  }

  setMutation() {
    let { formName, formEmail, formMessage } = this.state;

    if (formName.length !== null) {
      formName = document.getElementById("formName");
    } else {
      formName = document.getElementById("formName");
    }
  }
  componentDidMount() {
    this.setState({ cartItems: ["x"] });
    this.getData();
    setTimeout(() => this.getData(), 500);
    setTimeout(() => this.getData(), 1500);
    setTimeout(() => this.getData(), 2500);

    this.intervalID2 = setInterval(() => {
      this.getData.bind(this);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID2);
  }
  getData() {
    console.log("x");
    try {
      let concData = "";
      for (var i = 0; i < JSON.parse(respData).length; i++) {
        concData =
          concData + "\r\n A"[i] + JSON.stringify(JSON.parse(respData)[i]);
        this.state.ponoMapDATA = concData;
      }

      this.setState({ ponoMapDATA: this.state.ponoMapDATA });
    } catch (error) {
      console.log(error);
    }
  }

  valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }
  render() {
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
mutation MyMutation {
  createPonoMap(
    input: {
      data: {
        User: "${formName}"
      }
    }
  ) {
    ponoMap {
      id
      
    }
  }
}
`;

    const MyMutationMutation = (props) => {
      return (
        <Mutation mutation={MY_MUTATION_MUTATION}>
          {(MyMutation, { loading, error, data }) => {
            if (loading) return <pre>Loading</pre>;
            if (error) {
              alert("That username is taken");
            } else if (error)
              return (
                <pre>
                  Error in MY_MUTATION_MUTATION
                  {JSON.stringify(error, null, 2)}
                </pre>
              );

            const dataEl = data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : null;

            return (
              <span>
                {dataEl}

                <button onClick={() => MyMutation(this.state.formName)}>
                  Add Comment Data
                </button>
              </span>
            );
          }}
        </Mutation>
      );
    };
    return (
      <Fragment>
        <Container
          fluid
          style={{
            backgroundColor: "transparent",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ApolloProvider client={apolloClient}>
            <TabContent
              activeTab={this.state.activeTab}
              style={{
                backgroundColor: "transparent",
                opacity: 0.9,
                justifyContent: "center",
                alignSelf: "center",
                width: "100%",
              }}
            >
              <CardHeader
                className="ponoTitle"
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  alignSelf: "center",
                  width: "100%",

                  opacity: 100,
                }}
              >
                <i className="header-icon pe-7s-tools icon-gradient bg-plum-plate"></i>
                Moderator Control Panel
              </CardHeader>
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  justifyContent: "center",
                }}
              >
                <CardHeader
                  className="ponoTitle"
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    alignSelf: "center",

                    opacity: 100,
                  }}
                >
                  <Button
                    size="sm"
                    outline
                    color="alternate"
                    className={
                      "btn-pill btn-wide " +
                      classnames({ active: this.state.activeTab === "1" })
                    }
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Tools1
                  </Button>
                  <Button
                    width="25px"
                    outline
                    color="alternate"
                    className={
                      "btn-pill btn-wide mr-1 ml-1 " +
                      classnames({ active: this.state.activeTab === "2" })
                    }
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Tools2
                  </Button>
                  <Button
                    width="25px"
                    outline
                    color="alternate"
                    className={
                      "btn-pill btn-wide mr-1 ml-1 " +
                      classnames({ active: this.state.activeTab === "4" })
                    }
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    Invoice
                  </Button>
                </CardHeader>
              </div>
              <br />
              <TabPane
                className="ponoTitle"
                tabId="1"
                style={{
                  height: "100%",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  opacity: 100,
                }}
              >
                <Row style={{ justifyContent: "center" }}>
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      height: "100%",
                      alignItems: "center",
                      marginRight: "10px",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <CardTitle
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      Main Website Tools:
                    </CardTitle>
                    <span style={{ marginLeft: "10px", display: "block" }}>
                      <button
                        style={{ marginTop: "10px", borderRadius: "10px" }}
                        onClick={() => {
                          this.toggle("Chat");
                        }}
                      >
                        {" "}
                        Chat{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{ marginTop: "10px", borderRadius: "10px" }}
                        onClick={() => {
                          this.toggle("Products");
                        }}
                      >
                        {" "}
                        Products{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{ marginTop: "10px", borderRadius: "10px" }}
                        onClick={() => {
                          this.toggle("Events");
                        }}
                      >
                        {" "}
                        Events{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{ marginTop: "10px", borderRadius: "10px" }}
                        onClick={() => {
                          this.toggle("Content");
                        }}
                      >
                        {" "}
                        Content Editor{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{ marginTop: "10px", borderRadius: "10px" }}
                        onClick={() => {
                          this.toggle("Notes");
                        }}
                      >
                        {" "}
                        Notes{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{ marginTop: "10px", borderRadius: "10px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          localStorage.removeItem("jwt");
                          localStorage.removeItem("username");
                          window.location.reload();
                        }}
                      >
                        {" "}
                        Logout{" "}
                      </button>
                      &nbsp;
                      <br />
                      <br />
                    </span>
                  </Card>
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      backgroundColor: "transparent",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <CardTitle
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      Data Browser:
                    </CardTitle>
                    <TabContent
                      activeTab={this.state.activeTab2}
                      style={{
                        backgroundColor: "transparent",
                        opacity: 0.9,
                        justifyContent: "center",
                        alignSelf: "center",
                        width: "100%",
                      }}
                    >
                      <CardHeader
                        style={{
                          justifyContent: "center",
                          alignSelf: "center",
                          backgroundColor: "transparent",
                        }}
                        className="ponoTitle "
                      >
                        {" "}
                        <Button
                          size="sm"
                          outline
                          color="alternate"
                          className={
                            "btn-pill btn-wide " +
                            classnames({
                              active: this.state.activeTab2 === "1",
                            })
                          }
                          onClick={() => {
                            this.toggle2("1");
                          }}
                        >
                          Products
                        </Button>
                        <Button
                          size="sm"
                          outline
                          color="alternate"
                          className={
                            "btn-pill btn-wide " +
                            classnames({
                              active: this.state.activeTab2 === "2",
                            })
                          }
                          onClick={() => {
                            this.toggle2("2");
                          }}
                        >
                          Users
                        </Button>
                        <Button
                          size="sm"
                          outline
                          color="alternate"
                          className={
                            "btn-pill btn-wide " +
                            classnames({
                              active: this.state.activeTab2 === "3",
                            })
                          }
                          onClick={() => {
                            this.toggle2("3");
                          }}
                        >
                          Comments
                        </Button>
                      </CardHeader>
                      <TabPane
                        className="ponoTitle"
                        tabId="1"
                        style={{
                          height: "100%",
                          opacity: 100,
                        }}
                      >
                        {" "}
                        <br />
                        <FormQueryComponent />
                        <br />
                        <br />
                        <br />
                        <MyQueryCopyQuery />
                      </TabPane>
                      <TabPane
                        className="ponoTitle"
                        tabId="2"
                        style={{
                          height: "100%",
                          opacity: 100,
                        }}
                      >
                        <br />
                        <UserQueryComponent />
                        <br />
                        <br />
                        <MyQueryCopyQuery />
                      </TabPane>
                      <TabPane
                        className="ponoTitle"
                        tabId="3"
                        style={{
                          height: "100%",
                          opacity: 100,
                        }}
                      >
                        {" "}
                        <br />
                        {this.state.ponoMapDATA.split("\n").map((str) => (
                          <h5>{str}</h5>
                        ))}
                        <br />
                        <MyQueryCopyQuery />
                      </TabPane>
                    </TabContent>
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeader>
                      PrettyCoolPattern Large File Uploader
                    </CardHeader>
                    <CardBody>
                      <p>
                        For ease with numerous files, .zip archive them before
                        uploading.
                      </p>
                      <p>
                        Larger files or slow internet connections may take some
                        time.
                      </p>
                    </CardBody>
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
                            Send
                          </Button>
                        </div>
                      </Form>
                      <br />
                    </div>
                  </Card>{" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      backgroundColor: "transparent",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeader> Registered User View:</CardHeader>
                    <CardBody>
                      <AccountElements />
                    </CardBody>
                  </Card>
                </Row>
              </TabPane>{" "}
              <TabPane tabId="3">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ProductManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row style={{ justifyContent: "center" }}>
                  <Input
                    onChange={this.handlePriceInputChange}
                    placeholder={
                      toInteger(localStorage.getItem("localData4")) +
                      toInteger(localStorage.getItem("localData7"))
                    }
                  ></Input>{" "}
                  <Button id="PriceSet" style={{ width: "150px" }}>
                    {" "}
                    Set Price
                  </Button>
                </Row>{" "}
                <br />
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  ></Card>
                </Row>
              </TabPane>
              <TabPane tabId="Chat">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ChatManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Events">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <EventManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Products">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ProductManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Content">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ContentManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Notes">
                <Row style={{ justifyContent: "center" }}>
                  {" "}
                  <Card
                    style={{
                      width: "26rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <NoteManagerComponent />
                  </Card>
                </Row>
              </TabPane>
            </TabContent>
          </ApolloProvider>
        </Container>
      </Fragment>
    );
  }
}
