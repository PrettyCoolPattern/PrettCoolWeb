import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from 'react-router-dom';


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
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import aboutpic from "../../../assets/images/thumbs/about.png";
import publishingpic from "../../../assets/images/thumbs/publishing.png";
import shoppic from "../../../assets/images/thumbs/shop.png";
import audiopic from "../../../assets/images/thumbs/audio.png";
import visualpic from "../../../assets/images/thumbs/visual.jpg";
import logo from "../../../assets/images/logoani.gif";
import maui from "../../../assets/images/maui.png";
import illumexample from "../../../assets/images/thumbs/illumexample.png";
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

export default class ShopElements extends Component {
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
        <CSSTransitionGroup component="div" transitionName="TabsAnimation"
          transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
  
  <Row>
         <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
    <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
         <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
         </Row>
<br></br>

<Row>
         <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
    <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
         <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
         </Row>
<br></br>

<Row>
         <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
    <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
         <Col>


             <Card className="opacity-9" fluid >  
              <CardLink href="#/dashboards/services"> 
              <Route path="#/dashboards/services" />
               <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                 Services
               </CardHeader>
               <CardBody>
                <center>Skills for hire or consult.</center>
               </CardBody>
              </CardLink>
             </Card>
         </Col>
         </Row>
<br></br>
         
          <br></br>
          <Row>
            <Col sm="12" md="6" xl="4">
              <Card className="card-shadow-primary card-border text-white mb-3" color="primary">
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
                          Lead Web Applications Developer
                          </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Send Message
                    </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col sm="12" md="6" xl="4">
              <Card className="card-shadow-primary card-border text-white mb-3" color="focus">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-focus">
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                        <div className="avatar-icon">
                          <img src={avatar2} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Vinnie Wagstaff</h5>
                        <h6 className="menu-header-subtitle">
                          Backend Engineer
                          </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <Button className="btn-shadow-dark btn-wider" color="warning">
                    Send Message
                    </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col sm="12" md="12" xl="4">
              <Card className="card-shadow-primary card-border text-white mb-3" color="dark">
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-dark">
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                        <div className="avatar-icon">
                          <img src={avatar3} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Ruben Tillman</h5>
                        <h6 className="menu-header-subtitle">
                          Frontend UI Designer
                          </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <Button className="btn-shadow-dark btn-wider" color="success">
                    Send Message
                    </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
