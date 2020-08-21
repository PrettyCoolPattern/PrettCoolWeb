import React, { Component, Fragment } from "react";
import scriptLoader from 'react-async-script-loader';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from 'react-router-dom';
import PayPalButton from './PayPalButton';

 
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
import contrastus from "../../../assets/images/contrastus.png";
import collage from "../../../assets/images/collage.png";
import mandalashirt from "../../../assets/images/mandalashirt.png";

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

// PayPal API WIP

const onSuccess = (payment) =>
console.log('Successful payment!', payment);

const onError = (error) =>
console.log('Erroneous payment OR failed to load script!', error);

const onCancel = (data) =>
console.log('Cancelled payment!', data);

// 
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
            <Col xs="6" sm="4" md="3" xl="5">
              <Card className=" opacity-9" fluid >
                <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                  Official &amp; Annual Apparel
               </CardHeader>
                <CardBody>
                  <center>  The PrettyCoolShoppe currently presents three official and one annual design:</center>
                  <br></br>    <center> Proceeds fund PrettyCoolProjects, FOSS organizations, and local education. Find out more on the about page. </center><br></br>
                  <center> Please scroll to your hearts desire and reach out through the <a href="./#/dashboards/contact/" src="./#/dashboards/contact/">contact page</a> if you have any questions. Sizing is listed below. <br></br> <br></br>
                   <h3>  <i class="pe-7s-angle-down-circle"></i> <i class="pe-7s-angle-down-circle"></i> <i class="pe-7s-angle-down-circle"></i></h3> </center>
                </CardBody>
              </Card>

            </Col>
            <Col xs="6" sm="6" md="6" xl="5">

            <Card className=" opacity-9" fluid >
                  <Route path="#/dashboards/services" />
                  <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                    Collage De Vivre
               </CardHeader>
                  <CardBody>
                    <CardImg src={collage} width="80%"></CardImg>
                    <center> CollageDeVivre</center>

                  </CardBody>
              </Card>

            </Col>

          </Row>
          <br></br>

          <Row>
            <Col xs="6" sm="4" md="3" xl="5">
              <Card className=" opacity-9" fluid >
                <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                  Giveaways 
               </CardHeader>
                <CardBody>
                  <center> There are four PrettyCoolGiveaways a year</center><br></br>
                  <center> Stay tuned in by following on any social on the about page. </center><br></br>
                </CardBody>
              </Card>

            </Col>
            <Col xs="6" sm="6" md="6" xl="5">

            <Card className=" opacity-9" fluid >
                  <Route path="#/dashboards/services" />
                  <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                    Mandalas Trichromus
               </CardHeader>
                  <CardBody>
                    <CardImg src={mandalashirt} width="80%"></CardImg>
                    <center> MandalasTrichromus</center>
                  </CardBody>
              </Card>
            </Col>

          </Row>
          <br></br>

          <Row>
            <Col xs="6" sm="4" md="3" xl="5">
              <Card className=" opacity-9" fluid >
                <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                  More PrettyCoolOffers
               </CardHeader>
                <CardBody>
                <center> PCP builds and hosts websites for as little as $2 a month. </center><br></br>
                <center> Take a journey over to <a src="./#/dashboards/services" href="./#/dashboards/services">about </a></center><br></br>
                <center> Proceeds fund Pretty7 </center><br></br>
                  </CardBody>
              </Card>

            </Col>
            <Col xs="6" sm="6" md="6" xl="5">
         
            <Card className=" opacity-9" fluid >
                  <Route path="#/dashboards/services" />
                  <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                    Sprialus Contrastus
                 </CardHeader>
                  <CardBody>
                    <CardImg src={contrastus} width="80%"></CardImg>
                    <center>SprialusContrastus:</center>
                  </CardBody>
              </Card>

          
            </Col>

          </Row>
          <br></br>


          <Row>
            <Col xs="12" sm="5" md="4" xl="5">
              <Card className="height=210px opacity-9" fluid >
                  <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                    Checkout
               </CardHeader>
                  <CardBody  height="220px">
                  <br></br>Shipments go out through USPS Priority with tracking.
                  <br></br>Be sure to select a design from the list above, and your desired sizing.
                  <br></br> For alternative payments, send an email.
          <PayPalButton />   <br></br> </CardBody>
           
              </Card>

            </Col>
            <Col xs="6" sm="5" md="4" xl="4">
              <Card className=" opacity-9" fluid >
                <CardLink src="./#/dashboards/contact/" href="./#/dashboards/contact/"> 
                  <Route path="#/dashboards/contact" />
                  <CardHeader className="card-header-tab text-center card-shadow-focus opacity-9">
                    Make Contact
               </CardHeader>
               
                  <CardBody>
                    <p  className="pe-7s-rocket btn-icon-wrapper"> Have a question?</p><br></br>
                    <p  className="pe-7s-light btn-icon-wrapper"> Thinking of a suggestion?</p><br></br>
                    <p  className="pe-7s-science btn-icon-wrapper"> Interested in other services?</p><br></br>
                    <p className="pe-7s-mail btn-icon-wrapper"> Contact PCP with ease by clicking here and gain confidence and consultation absolutely free.</p>
                  </CardBody>
                  </CardLink> </Card>

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
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
