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

import gql from "graphql-tag";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  CardTitle,
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
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.microhawaii.com/graphql",
    headers: {
      "content-type": "application/json",
    },
  }),
});

export default class AccountElements extends Component {
  constructor(props) {
    super(props);
    this.submitContact = this.submitContact.bind(this);
    this.state = {
      formEmail: "",
      formName: [],
      formDesc: [],
      formMessage: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      formName: event.target.value,
    });
  }
  handleInputChange2(event) {
    this.setState({
      formDesc: event.target.value,
    });
  }

  submitContact() {
    let { formName, formEmail, formMessage } = this.state;

    if (formName.length !== null && formName.length < 1) {
      alert("You must fill this form entirely.");
    } else {
      console.log("success");
    }
  }

  render() {
    const logout = (e) => {
      e.preventDefault();
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
      window.location.reload();
    };
    let { formName, formDesc, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
    mutation MyMutation {
      createMicroComment(
        input: {
          data: {
            name: "${this.state.formName}  + ${Date().toString()}"
            comment: "${this.state.formDesc}"
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
                <div style={{ alignContent: "center" }}>
                  <br />
                  {dataEl} &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() =>
                      MyMutation(formName + formDesc, Date().toString())
                    }
                  >
                    Send
                  </button>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    style={{ backgroundColor: "#660000" }}
                    onClick={logout}
                  >
                    {" "}
                    Logout
                  </button>
                </div>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };
    return (
      <Fragment>
        <Container fluid>
          <ApolloProvider client={apolloClient}>
            <Card
              style={{
                width: "25rem",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              }}
            >
              <CardHeader
                style={{
                  backgroundColor: "transparent",
                }}
              >
                Succseffully Signed-In as {localStorage.getItem("username")}
              </CardHeader>
              <CardBody
                style={{
                  backgroundColor: "transparent",
                }}
              >
                Thank you for signing up with PrettyCoolPattern!
              </CardBody>{" "}
              <CardHeader
                style={{
                  backgroundColor: "transparent",
                }}
              >
                {" "}
                Additional Feautres Coming Soon{" "}
              </CardHeader>
              <CardBody
                style={{
                  justifyContent: "center",
                }}
              >
                <Form
                  style={{
                    justifyContent: "center",
                  }}
                >
                  Name: <br />
                  <Input
                    onChange={this.handleInputChange}
                    name="formName"
                    type="text"
                    value={this.state.formName}
                  ></Input>
                  <br />
                  Message: <br />
                  <Input
                    onChange={this.handleInputChange2}
                    name="formDesc"
                    type="textarea"
                    value={this.state.formDesc}
                  ></Input>
                  <br />
                </Form>
                <MyMutationMutation />
              </CardBody>
            </Card>
          </ApolloProvider>
        </Container>
      </Fragment>
    );
  }
}
