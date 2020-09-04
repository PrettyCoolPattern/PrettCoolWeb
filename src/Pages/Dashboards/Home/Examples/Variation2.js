import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import Services from "../services/";

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
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import servicespic from "../../../../assets/images/thumbs/services.png";
import aboutpic from "../../../../assets/images/thumbs/about.png";
import publishingpic from "../../../../assets/images/thumbs/publishing.png";
import shoppic from "../../../../assets/images/thumbs/shop.png";
import audiopic from "../../../../assets/images/thumbs/audio.png";
import visualpic from "../../../../assets/images/thumbs/visual.jpg";
import logo from "../../../../assets/images/logoani.gif";
import Main from "../../../Main";
import CenterMode from "../../../Components/Carousel/Examples/Slideshow/CenterMode";

const data55 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data22 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data3 = [
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
];

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);
console.info({
  sampleData,
  sampleData2,
  sampleData3,
  sampleData4,
});

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      data: makeData(),
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
        ><center>
          <Row>
          <Col   mx-auto
                  className=" opacity-9"
                  style={{ width: "12rem"  }} >
                  
              <Card  mx-auto >
                <a href="#/dashboards/services">
                  {" "}
                  <Route path="#/dashboards/services" />
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Services
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <img
                        width={140}
                        className="rounded-circle text-center"
                        src={servicespic}
                        alt=""
                      />
                    </div>
                    <center>Skills for hire or consult.</center>
                  </CardBody>
                </a>
              </Card>
              <br></br>
              <a href="#/dashboards/gallery">
                <Card mx-auto style={{ width: "11rem" }}>
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Visual Art Gallery
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <img
                        width={140}
                        className=" text-center"
                        src={visualpic}
                        alt=""
                      />
                    </div>
                    <center>Visual Gallery.</center>
                  </CardBody>
                </Card>
              </a> <br></br>
            </Col>
            <Col  mx-auto
                  className=" opacity-9"> 
              <a href="#/dashboards/shop">
                <Route path="#/dashboards/shop" />
                <Card mx-auto 
                >
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Shoppe
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <img
                        width={140}
                        className=" text-center"
                        src={shoppic}
                        alt=""
                      />
                    </div>
                    <center>PrettyCoolProducts.</center>
                  </CardBody>
                </Card>
              </a>
              <br></br>
              <a href="#/dashboards/writing">
                <Card
                  md="auto"
                  className="main-card mb-3"
                  style={{ width: "11rem" }}
                >
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Written Publishing
                    </div>{" "}
                    <div> </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <img
                        width={140}
                        className=" text-center"
                        src={publishingpic}
                        alt=""
                      />
                    </div>
                    <center>Non Fiction</center>
                  </CardBody>
                </Card>
              </a> <br></br>
            </Col>
            <Col mx-auto
                  className=" opacity-9">
              <a href="#/dashboards/services">
                <Route path="#/dashboards/services" />
                <Card mx-auto className="opacity-9" >
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      About
                    </div>{" "}
                    <div> </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <img
                        width={140}
                        className=" text-center"
                        src={aboutpic}
                        alt=""
                      />
                    </div>
                    <center> Learn More</center>
                  </CardBody>
                </Card>     <br></br>
              </a> </Col>
         
              
              <Col mx-auto
                  className=" opacity-9"
                  > <a href="#/dashboards/music">
                <Card
               mx-auto
                  className="main-card mb-3 opacity-9"
                  style={{ width: "11rem" }}
                >
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Audio Art Gallery
                    </div>{" "}
                    <div> </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <img
                        width={140}
                        className=" text-center"
                        src={audiopic}
                        alt=""
                      />
                      <br></br>
                    </div>
                    <center>Music Production.</center>
                  </CardBody>
                </Card>
              </a></Col>
            <Col mx-auto
                  className=" opacity-9"
                  style={{ width: "31rem" }} >


              <Card className="mb-3 main-card opacity-9">
                <CardHeader className="main-card dark card-header-tab">
                  <div className="card-header-title">
                    <i className=" lnr-rocket icon-gradient opacity-9"> </i>
                    PrettyCoolBulletin
                  </div>
                </CardHeader>{" "}
                <CardBody>
                  {" "}
                  <div>
                    <small> 8/17/20 </small> <br></br> <br></br>
                       I'd like to thank everyone who'se shown support through
                    the goals and work, wouldn't have gotten here without you.
                    <br></br> <br></br>
                      The site is being transfered to modern templature,
                    utilizing the React frameworks as the primary language.
                    Improvements to speed, aestetics and new features will be
                    rolling out over the coming weeks.
                    <br></br>
                    <br></br>   Please report any issues and commentary through
                    the contact page and thank you for <s>trying PCP</s>{" "}
                    stopping by.
                    <br></br>
                    <br></br> <br></br>{" "}
                    <center>
                      {" "}
                      <img src={logo} width="100"></img>
                    </center>
                    <br></br>
                    <br></br>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row></center>
          <Row></Row>
          <Row>
            {" "}
            <Col>
              <Card className="main-card mb-3 opacity-9">
                <CardHeader className="card-header-tab" color="light">
                  <div className="card-header-title font-size-lg font-weight-normal">
                    <i className="header-icon lnr-dice mr-3 text-muted opacity-6">
                      {" "}
                    </i>
                    Recent Updates: 7/17/20
                  </div>{" "}
                  <div>
                    {" "}
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </CardHeader>
                <CardBody>
                  Site updates are live! (Improved services page, upgraded
                  layout, added spunk)
                  <br></br>
                  <br></br>
                  Find out what PCP is working on, get involved and learn more,
                  by visiting the new
                  <a href="#/dashboards/projects"> Projects Page</a>.<br></br>
                  <br></br>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card className="main-card mb-3 opacity-9">
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg font-weight-normal">
                <i className="header-icon lnr-dice mr-3 text-muted opacity-6">
                  {" "}
                </i>
                Recent Updates: 6/15/20
              </div>{" "}
              <div> </div>
            </CardHeader>
            <CardBody>
              The PCP 3D Web-Game development is kicking off! Pre-Alpha 0.2 is
              now available
              <a href="../3D/"> here </a>.<br></br>
              <br></br>
            </CardBody>
          </Card>

          <Row></Row>

          <Row>
            <Col sm="12" md="6" xl="4">
              <Card
                className="card-shadow-primary card-border text-white mb-3"
                color="primary"
              >
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-primary">
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                        <div className="avatar-icon">
                          <img src={avatar1} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Jason Hoku Levien</h5>
                        <h6 className="menu-header-subtitle">
                          Founder / Owner
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <a href="#/dashboards/contact">
                    <Button className="btn-shadow-dark btn-wider" color="dark">
                      Send Message
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
