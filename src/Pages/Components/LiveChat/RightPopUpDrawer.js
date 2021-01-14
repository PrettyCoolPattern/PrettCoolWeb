import React, { Fragment } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";
import ContactElements from "../../Dashboards/Contact/contact";
import { FcIdea, FcFeedback, FcUndo, FcLock } from "react-icons/fc";
import "react-perfect-scrollbar/dist/css/styles.css";
import HeaderRightAuth from "./auth";
import axios from "axios";

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
      messageReceived: false,
      formName: [],
      loadedAdminMessage: "",
      loadedUserMessage: "",
      loadedHelpTitle: "Or send us a message directly:",
      textVar2:
        "Live Chat Currently Offline: Messages will be sent to staff inbox.",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openRightSidebar = this.openRightSidebar.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      formName: String(event.target.value).replace(/(\r\n|\n|\r)/gm, ""),
    });
  }
  closeRightSidebar() {
    document.getElementById("ChatBlock").style.opacity = 0;
    document.getElementById("ChatBlock").hidden = true;
  }

  openRightSidebar() {
    document.getElementById("ChatBlock").style.opacity = 1;
    document.getElementById("ChatBlock").hidden = false;
    document.getElementById("adminChat").hidden = false;
  }
  stopAdminChat() {
    document.getElementById("ChatBlock").style.opacity = 1;
    document.getElementById("ChatBlock").hidden = false;
    document.getElementById("adminChat").hidden = true;
    this.setState({ messageReceived: false });
  }

  componentDidMount() {
    this.getLiveChatData();
    setTimeout(() => this.getLiveChatData(), 500);
    setTimeout(() => this.getLiveChatData(), 1500);
    setTimeout(() => this.getLiveChatData(), 2500);

    let intervalId = setInterval(() => {
      this.getLiveChatData();
    }, 2000);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  getLiveChatData() {
    try {
      let concInstanceList = [];
      let localUUID = localStorage.getItem("localUUID");
      axios
        .get(`https://api.microHawaii.com/live-chats/`, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          if (res.err == null) {
            for (
              var i = 0;
              i < JSON.parse(JSON.stringify(res.data)).length;
              i++
            ) {
              if (
                String(JSON.parse(JSON.stringify(res.data))[i].instance) ===
                localStorage.getItem("localUUID")
              ) {
                this.setState({
                  localChatID: JSON.parse(JSON.stringify(res.data))[i].id,
                });
                if (
                  JSON.parse(JSON.stringify(res.data))[i].messageAdmin !== null
                ) {
                  this.setState({
                    loadedHelpTitle: "A site moderator is reaching out to you!",
                  });
                  if (!this.state.messageReceived) {
                    this.openRightSidebar();
                  }
                  this.setState({ messageReceived: true });
                  this.setState({ textVar2: "Live Chat Active!" });
                }
              }

              concInstanceList =
                concInstanceList +
                " " +
                String(JSON.parse(JSON.stringify(res.data))[i].instance);
              this.setState({
                instanceUUIDList: concInstanceList,
              });

              this.setState({ EZID: i });
              if (
                String(JSON.parse(JSON.stringify(res.data))[i].instance) ===
                localStorage.getItem("localUUID")
              ) {
                this.setState({
                  loadedAdminMessage: String(
                    JSON.parse(JSON.stringify(res.data))[this.state.EZID]
                      .messageAdmin
                  ),
                });
                this.setState({
                  loadedUserMessage: String(
                    JSON.parse(JSON.stringify(res.data))[this.state.EZID]
                      .messageUser
                  ),
                });
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
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
    const MY_MUTATION_MUTATION2 = gql`
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

    const MyMutationMutation2 = (props) => {
      this.state.sendButton = "Send";
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION2}>
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

    const MY_MUTATION_MUTATION3 = gql`
      mutation UpdateChat {
        updateLiveChat(
          input: { where: { id: ${
            this.state.localChatID
          } }, data: { messageUser: "${
      String(this.state.loadedUserMessage) +
      " xyzVar " +
      String(this.state.formName)
    }" } }
        ) {
          liveChat {
            messageUser
          }
        }
      }
    `;

    const MyMutationMutation3 = (props) => {
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION3}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : null;
              if (data) {
                this.setState({ formName: "" });
              }

              return <button onClick={() => MyMutation()}>Send</button>;
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
            width: "94%",
            right: "10px",
            boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            borderRadius: "5px",
            maxWidth: "400px",
            maxHeight: "fit",
          }}
        >
          <PerfectScrollbar>
            <div
              style={{
                textAlign: "right",
                marginBottom: "-45px",
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
              <div
                style={{
                  position: "center",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "left",
                  marginLeft: "-75px",
                }}
              >
                <b> {this.state.loadedHelpTitle}</b>
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
                  style={{
                    position: "bottom",
                    marginLeft: "-55px",
                  }}
                >
                  <div
                    style={{
                      boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      maxWidth: "300px",
                      textAlign: "center",
                    }}
                  >
                    <p> {this.state.textVar2}</p> <br />
                    <Row id="adminChat" hidden>
                      <Col style={{ width: "50%" }}>
                        {" "}
                        {this.state.loadedUserMessage
                          .replace(/xyzVar/g, "\r\n")
                          .split("\r\n")
                          .map((str, index) => (
                            <h5 key={index}>{str}</h5>
                          ))}
                      </Col>
                      <Col style={{ width: "50%" }}>
                        {this.state.loadedAdminMessage
                          .replace(/xyzVar/g, "\r\n")
                          .split("\r\n")
                          .map((str, index) => (
                            <h5 key={index}>{str}</h5>
                          ))}
                      </Col>
                      <Row style={{ width: "100%" }}></Row>
                      <Col>
                        <b>User</b>:
                      </Col>{" "}
                      <Col>
                        <b>Admin</b>
                      </Col>
                    </Row>
                  </div>{" "}
                  <br />
                  <Input
                    onChange={this.handleInputChange}
                    name="formName"
                    value={String(this.state.formName).replace(
                      /(\r\n|\n|\r)/gm,
                      ""
                    )}
                    type="textarea"
                    style={{ width: "190px" }}
                  ></Input>
                  <span style={{ position: "relative", top: "-15px" }}>
                    <ApolloProvider client={apolloClient}>
                      <span hidden={this.state.messageReceived}>
                        <MyMutationMutation />{" "}
                      </span>
                      <span
                        id="liveChatSendButton"
                        hidden={!this.state.messageReceived}
                      >
                        {" "}
                        <MyMutationMutation3 />
                      </span>
                    </ApolloProvider>
                  </span>{" "}
                  <br />
                  <img src="/images/PCP-Site-Logo.gif"></img>{" "}
                    <ApolloProvider client={apolloClient}>
                  <HeaderRightAuth />{" "}
                    </ApolloProvider>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </Fragment>
    );
  }
}

export default HeaderRightDrawer;
