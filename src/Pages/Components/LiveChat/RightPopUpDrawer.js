import React, { Component, Fragment, useState, useEffect, useRef } from "react";

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

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

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
function HeaderRightDrawer() {
  const [textVar2, settextVar2] = useState(
    "Live Chat Currently Offline: Messages will be sent to staff inbox."
  );

  const [active, setactive] = useState(false);
  const [openRight, setopenRight] = useState(false);

  const [width, setwidth] = useState(450);
  const [formName, setformName] = useState([]);
  const [loadStage, setloadStage] = useState("1");
  const [loadedAdminMessage, setloadedAdminMessage] = useState("");
  const [loadedUserMessage, setloadedUserMessage] = useState("");
  const [activeProURL, setactiveProURL] = useState("");
  const [deleteIDVar, setdeleteIDVar] = useState(0);
  const [loadedEzID, setloadedEzID] = useState("1");
  const [loadedTitle, setloadedTitle] = useState("0");
  const [loadedSizes, setloadedSizes] = useState("0");
  const [loadedShop, setloadedShop] = useState("0");
  const [loadedPrice, setloadedPrice] = useState("0");
  const [loadedImageURLtoImg, setloadedImageURLtoImg] = useState("");
  const [readyTitle, setreadyTitle] = useState("0");
  const [readySizes, setreadySizes] = useState("0");
  const [readyShop, setreadyShop] = useState("0");
  const [readyPrice, setreadyPrice] = useState("0");
  const [readyImgURL, setreadyImgURL] = useState("0");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("0");
  const [proStatusText, setproStatusText] = useState("Loading...");
  const [loadedHelpTitle, setloadedHelpTitle] = useState(
    "Or send us a message directly:"
  );

  const isInitialMount = useRef(true);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("X" + loadStage);
      if (isInitialMount.current) {
        if (loadStage === "2") {
          if (loadedPrice != "0") {
            setloadStage("3");
          }
          return () => clearInterval(interval);
        }
        if (loadStage === "1") {
          if (loadedTotalIDs != "0") {
            setloadStage("2");
          }
          return () => clearInterval(interval);
        }
        if (loadStage === "3") {
          if (localStorage.getItem("gotDownloadURL")) {
            setloadStage("4");
          }
          return () => clearInterval(interval);
        }
        if (loadStage === "4") {
          setproStatusText("Ready: " + loadedEzID + " / " + loadedTotalIDs);
          if (localStorage.getItem("gotDownloadURL")) {
            setreadyImgURL(localStorage.getItem("gotDownloadURL"));
          }
          return () => clearInterval(interval);
        }
        return () => clearInterval(interval);
      } else {
        isInitialMount.current = false;
        return () => clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  });

  function handleInputChange(event) {
    setState({
      formName: String(event.target.value).replace(/(\r\n|\n|\r)/gm, ""),
    });
  }
  function formResetter() {
    document.getElementById("commentFormInput").value = "";
    setformName("");
    try {
      document.forms[0].reset();
      document.forms[1].reset();
      document.forms[2].reset();
      document.forms[3].reset();
      document.forms[4].reset();
      document.forms[5].reset();
    } catch (error) {}
  }

  function closeRightSidebar() {
    document.getElementById("ChatBlock").style.opacity = 0;
    document.getElementById("ChatBlock").hidden = true;
  }

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  function ChatRoom() {
    const dummy = useRef();
    const snapshotRef = firestore.collection("LiveChat");
    const query = snapshotRef.orderBy("createdAt").limit(3);

    const [snapshot] = useCollectionData(query, { id: "id" });

    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
      e.preventDefault();
      alert("Message Sent!")

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
                position: "relative",
                bottom: "0px",
              }}
              className="inputchat"
              value={formValue}
              type="text"
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Send Message"
            />
            <button
              style={{
                textAlign: "center",
                position: "relative",
                bottom: "2px",
              }}
              className="buttonchat"
              type="submit"
              disabled={!formValue}
            >
              🕊️
            </button>
          </form>
        </span>
      </>
    );
  }
  function ChatMessage(props) {
    const { text, id, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return <></>;
  }

  function openRightSidebar() {
    document.getElementById("ChatBlock").style.opacity = 1;
    document.getElementById("ChatBlock").hidden = false;
    document.getElementById("adminChat").hidden = false;
  }
  function stopAdminChat() {
    document.getElementById("ChatBlock").style.opacity = 1;
    document.getElementById("ChatBlock").hidden = false;
    document.getElementById("adminChat").hidden = true;
    setState({ messageReceived: false });
  }

  function componentDidMount() {
    getLiveChatData();
    setTimeout(() => getLiveChatData(), 500);
    setTimeout(() => getLiveChatData(), 1500);
    setTimeout(() => getLiveChatData(), 2500);
  }
  function componentWillUnmount() {
    clearInterval(intervalId);
  }
  function getLiveChatData() {
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
                setState({
                  localChatID: JSON.parse(JSON.stringify(res.data))[i].id,
                });
                if (
                  JSON.parse(JSON.stringify(res.data))[i].messageAdmin !== null
                ) {
                  setState({
                    loadedHelpTitle: "A site moderator is reaching out to you!",
                  });
                  if (!messageReceived) {
                    openRightSidebar();
                  }
                  setState({ messageReceived: true });
                  setState({ textVar2: "Live Chat Active!" });
                }
              }

              concInstanceList =
                concInstanceList +
                " " +
                String(JSON.parse(JSON.stringify(res.data))[i].instance);
              setState({
                instanceUUIDList: concInstanceList,
              });

              setState({ EZID: i });
              if (
                String(JSON.parse(JSON.stringify(res.data))[i].instance) ===
                localStorage.getItem("localUUID")
              ) {
                setState({
                  loadedAdminMessage: String(
                    JSON.parse(JSON.stringify(res.data))[EZID].messageAdmin
                  ),
                });
                setState({
                  loadedUserMessage: String(
                    JSON.parse(JSON.stringify(res.data))[EZID].messageUser
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
            <button onClick={closeRightSidebar}>X</button>
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
                    onClick={closeRightSidebar}
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
                    <FcFeedback style={{ position: "relative", top: "-5px" }} />{" "}
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
                    onClick={closeRightSidebar}
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
                        About PrettCoolPattern
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
                  onClick={closeRightSidebar}
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
              <b> {loadedHelpTitle}</b>
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
                <section>{<ChatRoom />}</section>
                <img src="/images/PCP-Site-Logo.gif"></img>{" "}
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
}

export default HeaderRightDrawer;
