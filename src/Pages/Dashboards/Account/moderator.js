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
import CommentManagerComponent from "./CommentManagerComponent.js";
import SurveyManagerComponent from "./SurveyManagerComponent.js";
import LiveChatManagerComponent from "./LiveChatManagerComponent.js";
import DocumentationPage from "./Documentation.js";
import VideoManager from "./VideoManager.js";
import IssueManager from "./IssueManager.js";

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
              ((respData = JSON.stringify(data.microComments, null, 1)),
              console.log("z microComment"))
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
      activeTab2: "1",
      cartItems: "x",
      cart: ["x", "y"],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePriceInputChange = this.handlePriceInputChange.bind(this);
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
  componentWillUnmount() {
    clearInterval(this.intervalID2);
  }
  valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }
  render() {
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    return (
      <Fragment>
        <Container
          fluid
          style={{
            backgroundColor: "transparent",
            backgroundColor: "#FFFFFFDD",
            borderRadius: "55px",
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
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                  borderBottom: "none",
                  marginBottom: "-25px",
                  width: "100%",
                  opacity: 100,
                }}
              >
                <h2>
                  <i className="pe-7s-tools icon-gradient bg-plum-plate"></i>
                  Moderator Controls
                </h2>
              </CardHeader>
              <CardHeader
                style={{
                  marginBottom: "-35px",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  borderBottom: "none",
                  alignSelf: "center",
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
                  Main Tools
                </Button>
                <Button
                  outline
                  color="alternate"
                  className={
                    "btn-pill btn-wide " +
                    classnames({ active: this.state.activeTab === "2" })
                  }
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Team
                </Button>
                <Button
                  outline
                  color="alternate"
                  className={
                    "btn-pill btn-wide " +
                    classnames({ active: this.state.activeTab === "4" })
                  }
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  Invoice
                </Button>
              </CardHeader>
              <br />
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
                      width: "24rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      height: "100%",
                      marginTop: "10px",
                      marginBottom: "-20px",
                      alignItems: "center",
                    }}
                  >
                    <CardTitle
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        marginBottom: "-15px",
                      }}
                    >
                      <h4>Main Website Tools:</h4>
                    </CardTitle>
                    <span
                      style={{
                        marginLeft: "10px",
                        marginTop: "5px",
                        display: "block",
                      }}
                    >
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#009900",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Documentation");
                        }}
                      >
                        {" "}
                        Documentation{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#009999",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Content");
                        }}
                      >
                        {" "}
                        Content Editor{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#006699",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Video");
                        }}
                      >
                        {" "}
                        Video Manager{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#0033AA",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Users");
                        }}
                      >
                        {" "}
                        User Management{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#0000CC",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Comments");
                        }}
                      >
                        {" "}
                        Comments{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#3300CC",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Products");
                        }}
                      >
                        {" "}
                        Products{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#6600CC",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Events");
                        }}
                      >
                        {" "}
                        Events{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#BB00CC",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Notes");
                        }}
                      >
                        Your Notes
                      </button>
                      &nbsp;
                      <button
                        style={{
                          backgroundColor: "#BB0099",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Surveys");
                        }}
                      >
                        {" "}
                        Surveys{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          backgroundColor: "#BB0066",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Live");
                        }}
                      >
                        {" "}
                        Live Chat{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          backgroundColor: "#BB0033",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
                        onClick={() => {
                          this.toggle("Issue");
                        }}
                      >
                        {" "}
                        Report Issue{" "}
                      </button>
                      &nbsp;
                      <button
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#FF0000",
                          borderRadius: "16px",
                          height: "35px",
                          fontSize: "120%",
                          marginTop: "5px",
                        }}
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
                      width: "24rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      height: "100%",
                      marginTop: "12px",
                      alignItems: "center",
                      marginBottom: "25px",
                    }}
                  >
                    <CardTitle
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Highlight Metrics:</h4>
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
                      <TabPane
                        className="ponoTitle"
                        tabId="1"
                        style={{
                          height: "100%",
                          opacity: 100,
                        }}
                      >
                        <h4>
                          Users: 4
                          <br />
                          Comments: 2
                          <br />
                          Pubic Chat Messages: 4
                          <br />
                          Survey Responses: 0
                          <br />
                          Chat Live Now: 1
                        </h4>
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
                          encType="multipart/form-data"
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
                  >
                    NYI
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Comments">
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
                    <CommentManagerComponent />
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
              <TabPane tabId="Surveys">
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
                    <SurveyManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Live">
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
                    <LiveChatManagerComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Documentation">
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
                    <DocumentationPage />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Video">
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
                    <VideoManager />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Users">
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
                    <UserQueryComponent />
                  </Card>
                </Row>
              </TabPane>
              <TabPane tabId="Issue">
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
                    <IssueManager />
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
