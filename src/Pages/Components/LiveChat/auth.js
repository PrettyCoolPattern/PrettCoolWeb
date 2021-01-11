import React, { Fragment } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";
import ContactElements from "../../Dashboards/Contact/contact";
import { FcIdea, FcFeedback, FcUndo, FcLock } from "react-icons/fc";
import "react-perfect-scrollbar/dist/css/styles.css";
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
import axios from "axios";

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

class HeaderRightAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 450,
      formName: [],
    };
  }
  gql() {
    const MY_MUTATION_MUTATION2 = gql`

  mutation CreateChat {
    createLiveChat(
      input: {
        data: {
          instance: "${String(uuidv4())}"
          messageUser: ""
        }
      }
    ) {
      liveChat {
        instance
        messageUser
        
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
  }
  componentDidMount() {
    this.onSubmit();
  }
  onSubmit = () => {
    const formData = new FormData();
    formData.instance = String(uuidv4());

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    null;
    return null;
  }
}
export default HeaderRightAuth;
