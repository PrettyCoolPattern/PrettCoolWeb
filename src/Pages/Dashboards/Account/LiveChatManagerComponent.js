import React, { Component, Fragment, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";

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
} from "reactstrap";
import axios from "axios";
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

class NoteManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      textVar2: "Select an Instance To Begin",
      statusVar: "Offline",
      deleteIDVar: "26",
      loadedUserMessage: "",
      loadedAdminMessage: "",
    };
  }

  componentDidMount() {
    this.getData();
    setTimeout(() => this.getData(), 500);
    setTimeout(() => this.getData(), 1500);
    setTimeout(() => this.getData(), 2500);

    let intervalId = setInterval(() => {
      this.getData();
    }, 2000);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  getData() {
    console.log("Check Live Chat Data");
    try {
      this.state.authVar = axios
        .get(`https://api.microHawaii.com/live-chats`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          if (res.err == null) {
            localStorage.setItem(
              "ActiveChatUserCount",
              String(JSON.parse(JSON.stringify(res.data)).length)
            );
            let concData = "";
            for (
              var i = 0;
              i < JSON.parse(JSON.stringify(res.data)).length;
              i++
            ) {
              concData =
                concData +
                "\r\n ID#" +
                JSON.stringify(JSON.parse(JSON.stringify(res.data))[i].id) +
                "\r\n Instance: " +
                JSON.parse(JSON.stringify(res.data))[i].instance;
              "\r\n Instance" +
                JSON.parse(JSON.stringify(res.data))[i].created_at;
              "\r\n Instance" +
                JSON.parse(JSON.stringify(res.data))[i].MessageUser;
              this.setState({
                textVar: concData
                  .split("\n")
                  .map((str, index) => <h5 key={index}>{str}</h5>),
              });
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

  handleInputChange(event) {
    this.setState({
      noteVar: event.target.value,
    });
  }
  handleInputChange2(event) {
    this.setState({
      deleteIDVar: event.target.value,
    });
  }

  onSubmit = () => {
    const formData = new FormData();
    formData.Answers = this.state.noteVar;

    axios
      .post(
        `https://api.microhawaii.com/live-chats`,
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
          document.getElementById("apiupform").hidden = false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  runGetLive() {
    try {
      this.state.authVar = axios
        .get(`https://api.microHawaii.com/live-chats`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          if (res.err == null) {
            for (
              var i = 0;
              i < JSON.parse(JSON.stringify(res.data)).length;
              i++
            )
              if (
                String(JSON.parse(JSON.stringify(res.data))[i].id) ===
                this.state.deleteIDVar
              ) {
                this.setState({ EZID: i });
              }
            this.setState({
              statusVar: "On ID#" + this.state.deleteIDVar,
            });
            this.setState({
              textVar2: "On ID#" + this.state.deleteIDVar,
            });
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
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
  onSubmitDelete = () => {
    const formData = new FormData();
    formData.Note = this.state.noteVar;
    formData.id = 21;
    console.log(formData);

    axios
      .post(
        `https://api.microhawaii.com/live-chats`,
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    mutation DeletelLiveChat {
      deleteLiveChat(input: { where: { id: ${this.state.deleteIDVar} } }) {
        liveChat {
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
                  Start Chat From ID
                </button>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };

    const MY_MUTATION_MUTATION3 = gql`
      mutation UpdateChat {
        updateLiveChat(
          input: { where: { id: ${this.state.deleteIDVar} }, data: { messageAdmin: "Live Chat Available" } }
        ) {
          liveChat {
            messageAdmin
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
                this.setState({
                  textVar2: "Initializing",
                });

                this.setState({
                  loadedAdminMessage: "Initializing",
                });
                this.runGetLive();
              }

              return (
                <button
                  onClick={() =>
                    MyMutation(formName + formDesc, Date().toString())
                  }
                >
                  Initialize
                </button>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };
    return (
      <Fragment>
        <CardHeader
          style={{
            marginBottom: "-10px",
            backgroundColor: "transparent",
          }}
        >
          {" "}
          <h2>Live&nbsp;Chat&nbsp;Manager</h2> <br />
        </CardHeader>
        <h2>Status:&nbsp;{this.state.statusVar}</h2>
        <CardHeader
          style={{
            marginBottom: "-25px",
            backgroundColor: "transparent",
          }}
        >
          <Button color="primary" onClick={() => alert("coming soon")}>
            Go Online
          </Button>
          &nbsp;
          <Button color="primary" onClick={() => alert("coming soon")}>
            Go Offline
          </Button>
          &nbsp;
        </CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p> {this.state.textVar2}</p> <br />
            <Row>
              <Col style={{ width: "50%" }}>{this.state.loadedUserMessage}</Col>
              <Col style={{ width: "50%" }}>
                {this.state.loadedAdminMessage}
              </Col>
              <Row style={{ width: "100%" }}></Row>
              <Col>
                <b>User</b>:
              </Col>{" "}
              <Col>
                <b>Admin</b>
              </Col>
            </Row>
          </div>
          <br />
          <input
            type="number"
            onChange={() => this.handleInputChange2(event)}
            style={{ width: "75px" }}
          ></input>{" "}
          &nbsp;
          <MyMutationMutation3 />
          <br />
          <Input
            value={this.state.noteVar}
            name="NoteVar"
            id="NoteVar"
            onChange={() => this.handleInputChange(event)}
            style={{ top: "15px", position: "relative" }}
            type="textarea"
          ></Input>{" "}
          &nbsp;
          <button onClick={() => this.onSubmit()}> Send</button> <br />
          <br />{" "}
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            {this.state.textVar}
          </div>
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default NoteManagerComponent;
