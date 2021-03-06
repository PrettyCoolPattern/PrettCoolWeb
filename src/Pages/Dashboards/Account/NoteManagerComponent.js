import React, { Component, Fragment, useState, useEffect, useRef } from "react";

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

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import "./chat.css";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "prettycoolpattern.firebaseapp.com",
  databaseURL: "https://prettycoolpattern-default-rtdb.firebaseio.com",
  projectId: "prettycoolpattern",
  storageBucket: "prettycoolpattern.appspot.com",
  messagingSenderId: "23872046630",
  appId: "1:23872046630:web:eb70291014179f1d3248e7",
  measurementId: "G-9XKT9B5ZVP",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function SiteChatManagerComponent() {
  const [url, setURL] = useState("");
  const [file, setFile] = useState(null);
  const [user] = useAuthState(auth);

  return (
    <Fragment>
      <Card>
        <CardBody
          style={{
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
            marginLeft: "-10px",
            marginRight: "-10px",
          }}
        >
          <h4 style={{ width: "100%", textAlign: "left" }}>
            <b>&nbsp;SiteChat</b>
          </h4>
          <section>{<ChatRoom />}</section>
        </CardBody>
      </Card>
      <br />
    </Fragment>
  );
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function handleInputChangeEvent(event) {
  setState({
    [event.target.name]: event.target.value,
  });
}

function ChatRoom() {
  const dummy = useRef();
  const snapshotRef = firestore.collection("Notes");
  const query = snapshotRef.orderBy("id").limit(25);

  const [snapshot] = useCollectionData(query, { id: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await snapshotRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {snapshot &&
          snapshot.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>
      <span style={{ width: "100%", textAlign: "center" }}>
        <form className="formchat" onSubmit={sendMessage}>
          <Input
            style={{
              textAlign: "center",
            }}
            className="inputchat"
            value={formValue}
            type="textarea"
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Send Message"
          />
          <button className="buttonchat" type="submit" disabled={!formValue}>
            🕊️
          </button>
        </form>
      </span>
    </>
  );
}
function ChatMessage(props) {
  const { Note, id, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        {id}
        <p style={{ fontSize: "22px" }} className="pchat">
          {Note}
        </p>
      </div>
    </>
  );
}
export default SiteChatManagerComponent;
