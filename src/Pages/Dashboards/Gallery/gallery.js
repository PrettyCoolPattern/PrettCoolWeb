import React, { Component, Fragment } from "../../../../node_modules/react";
import scriptLoader from "../../../../node_modules/react-async-script-loader";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "../../../../node_modules/classnames";
import ReactTable from "../../../../node_modules/react-table";
import { Route } from "../../../../node_modules/react-router-dom";
import CarouselBSExample from "./Carousel";

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
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
  CardTitle,
} from "../../../../node_modules/reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "../../../../node_modules/recharts";

import PerfectScrollbar from "../../../../node_modules/react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
} from "../../../../node_modules/@fortawesome/free-solid-svg-icons";

import {
  Sparklines,
  SparklinesCurve,
} from "../../../../node_modules/react-sparklines";

import { makeData } from "../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome";
import CountUp from "../../../../node_modules/react-countup";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import contrastus from "../../../assets/images/contrastus.png";
import collage from "../../../assets/images/collage.png";
import mandalashirt from "../../../assets/images/mandalashirt.png";

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

export default class GalleryElements extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
    };
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginTop: "-15px",
              marginBottom: "-15px",

              textAlign: "center",
            }}
            width="100%"
          >
            <CardTitle
              style={{
                textAlign: "center",
                borderRadius: "25px",
                backgroundColor: "#440066BB",
                paddingRight: "10px",
                paddingLeft: "10px",
                fontWeight: "900",
                color: "whitesmoke",
                fontSize: "36px",
              }}
            >
              Visual Gallery
            </CardTitle>
          </Row>
          <Row style={{ justifyContent: "center" }}>
          <Col width="100%" style={{ maxWidth: "750px" }}>
                  <Card>
                <CardBody>
                  <p>
                    <h4>
                      {" "}
                      An image is said to contain a thousand words, but how
                      should one contain a thousand images?
                    </h4>
                  </p>{" "}
                <center>
                  <CarouselBSExample />
                </center>
                <center>← PrettyCoolSlideshow →
                  <br /> 100 Random Selects <br /><br />
                </center>
                  <p>
                    <h5>
                      PCP has produced over 1,200 logos, icons, textures, and
                      graphics.
                    </h5>
                  </p>{" "}
                  <p>
                    Here rests a collection of some, growing over time.
                  </p>{" "}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>

          <Row>
            <Col xs="6" sm="4" md="4" xl="3">
              <Card>
                <CardBody>
                  {" "}
                  Instagram Gallery:
                  <br></br>
                  <a href="http://instagram.com/jasonlevien">
                    http://instagram.com/jasonlevien{" "}
                  </a>
                </CardBody>
              </Card>{" "}
            </Col>

            <Col style={{ marginTop: "10px" }} xs="6" sm="4" md="3" xl="4">
              <Card>
                <CardBody>
                  Free Wallpapers Download:
                  <br></br> <br></br>
                  <li>
                    {" "}
                    <a href="https://drive.google.com/drive/folders/0BwrXo2gcPpKOeXBzejk1YXNCYWs">
                      Desktop{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/0BwrXo2gcPpKOUkhQMUZqVHpfNzgs">
                      Mobile{" "}
                    </a>
                  </li>
                </CardBody>
              </Card>{" "}
            </Col>

            <Col style={{ marginTop: "15px" }} xs="7" sm="4" md="4" xl="5">
              <a href="#/dashboard/contact">
                <Card>
                  <CardHeader>Contact</CardHeader>
                  <CardBody>
                    PrettyCoolPattern eagerly responds to all persons within 1-2
                    days.
                    <br></br>
                    For commission inquiries, suggestions or commentary reach
                    out through the{" "}
                    <a href="#/dashboard/contact"> contact page.</a>
                  </CardBody>
                </Card>
              </a>
            </Col>
          </Row>
          <br></br>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
