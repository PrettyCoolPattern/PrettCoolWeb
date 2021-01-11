import React, { Fragment } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";
import ContactElements from "../../Dashboards/Contact/contact";
import { FcIdea, FcFeedback, FcUndo, FcLock } from "react-icons/fc";
import "react-perfect-scrollbar/dist/css/styles.css";
import HeaderRightAuth from "./auth";

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
import ButtonsSquareGradients from "../../Elements/Button/Square/Examples/Gradients";
import { Link } from "react-router-dom";

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";
import gql from "graphql-tag";

import { v4 as uuidv4 } from "uuid";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.microhawaii.com/graphql",
    headers: {
      "content-type": "application/json",
    },
  }),
});

class HeaderRightDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      openRight: this.props.RightDrawerActive,
      openLeft: false,
      relativeWidth: false,
      width: 450,
      noTouchOpen: false,
      noTouchClose: false,
      formName: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      formName: event.target.value,
    });
  }
  closeRightSidebar() {
    document.getElementById("ChatBlock").style.opacity = 0;
    document.getElementById("ChatBlock").hidden = true;
  }

  render() {
    let { formName, formDesc, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
    mutation MyMutation {
      createMicroComment(
        input: {
          data: {
            name: "${Date().toString()}"
            comment: "${this.state.formName}"
            user: "${localStorage.getItem("username")}"
          }
        }
      ) {
        microComment {
          name
          comment
          user
          
        }
      }
    }
    
    `;

    const MyMutationMutation = (props) => {
      this.state.sendButton = "Send";
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data
                ? ((<pre>{JSON.stringify(null, null, 2)}</pre>),
                  (this.state.sendButton = "Success!"))
                : null;
              return (
                <span style={{ alignContent: "center" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    id="apiupform2"
                    onClick={() => MyMutation(formName, Date().toString())}
                  >
                    {this.state.sendButton}
                  </button>
                </span>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };
    return (
      <Fragment>
        <div
          hidden
          id="ChatBlock"
          style={{
            position: "fixed",
            backgroundColor: "white",
            opacity: 0,
            bottom: "25px",
            zIndex: "998",
            height: "88%",
            width: "94%",
            right: "10px",
            boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            borderRadius: "5px",
          }}
        >
          <PerfectScrollbar>
            <div
              style={{
                textAlign: "right",
                marginBottom: "-45px",
                zIndex: "1001",
                position: "relative",
              }}
            >
              <button onClick={this.closeRightSidebar}>X</button>
            </div>
            &nbsp; &nbsp; &nbsp;{" "}
            <h3
              style={{
                textAlign: "center",
                fontWeight: "700",
                marginBottom: "-5px",
                marginTop: "-5px",
              }}
            >
              Quick-Help
            </h3>
            <div
              className="helpPopup"
              style={{
                height: "100%",
                marginLeft: "25px",
                fontSize: "125%",
                position: "center",
                alignContent: "center",
                alignSelf: "center",
                justifyItems: "center",
                justifySelf: "center",
              }}
            >
              <h4
                style={{
                  textAlign: "center",
                  left: "-15px",
                  position: "relative",
                }}
              >
                How may I help you?
              </h4>
              <br />
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <div style={{ width: "350px" }}>
                  <a href="/#/dashboards/Account">
                    <Button
                      onClick={this.closeRightSidebar}
                      size="large"
                      style={{ fontSize: "120%" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          left: "-5px",
                          top: "-3px",
                        }}
                      >
                        <FcLock style={{ position: "relative", top: "-5px" }} />
                        <span style={{ position: "relative", top: "-2px" }}>
                          Login
                        </span>
                      </div>
                    </Button>
                  </a>{" "}
                </div>
              </div>{" "}
              <br />
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                }}
              >
                {" "}
                <div style={{ width: "350px" }}>
                  {" "}
                  <Button disabled size="large" style={{ fontSize: "120%" }}>
                    <div
                      style={{
                        position: "relative",
                        left: "-5px",
                        top: "-3px",
                      }}
                    >
                      <FcFeedback
                        style={{ position: "relative", top: "-5px" }}
                      />{" "}
                      <span style={{ position: "relative", top: "-2px" }}>
                        Feedback (Coming Soon)
                      </span>
                    </div>
                  </Button>
                </div>
              </div>{" "}
              <br />
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div style={{ width: "350px" }}>
                  <a href="/#/dashboards/services">
                    <Button
                      onClick={this.closeRightSidebar}
                      size="large"
                      style={{ fontSize: "120%" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          left: "-5px",
                          top: "-3px",
                        }}
                      >
                        <FcIdea style={{ position: "relative", top: "-5px" }} />{" "}
                        <span style={{ position: "relative", top: "-2px" }}>
                          Learn About PrettCoolPattern
                        </span>
                      </div>
                    </Button>
                  </a>
                </div>{" "}
              </div>
              <br />
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div style={{ width: "350px" }}>
                  <Button
                    onClick={this.closeRightSidebar}
                    size="large"
                    style={{ fontSize: "120%" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        left: "-5px",
                        top: "-3px",
                      }}
                    >
                      <FcUndo style={{ position: "relative", top: "-5px" }} />{" "}
                      <span style={{ position: "relative", top: "-2px" }}>
                        {" "}
                        Continue Browsing
                      </span>
                    </div>
                  </Button>
                </div>
              </div>{" "}
              <br />
              <br />
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                  marginLeft: "-75px",
                }}
              >
                Or send us a message directly:
              </div>{" "}
              <br />
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div
                  className="helpFooter"
                  style={{ position: "bottom", marginLeft: "25px" }}
                >
                  <Input
                    disabled
                    type="textarea"
                    placeholder="Live Chat Currently Offline: This form will send messages directly to admin."
                    style={{ width: "190px", height: "125px" }}
                  ></Input>{" "}
                  <br />
                  <Input
                    onChange={this.handleInputChange}
                    name="formName"
                    value={this.state.formName}
                    type="textarea"
                    style={{ width: "190px" }}
                  ></Input>
                  <span style={{ position: "relative", top: "-15px" }}>
                    <ApolloProvider client={apolloClient}>
                      <MyMutationMutation />
                    </ApolloProvider>
                  </span>{" "}
                  <br />
                  <img src="/images/PCP-Site-Logo.gif"></img>{" "}
                  <HeaderRightAuth /> </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div> 
      </Fragment>
    );
  }
}

export default HeaderRightDrawer;
