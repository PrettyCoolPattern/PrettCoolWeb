import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import DoughnutExample from "../doughnut";
import PieExample from "../pie";
import DynamicDoughnutExample from "../dynamicDoughnut";
import RadarExample from "../radar";
import PolarExample from "../polar";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

export default class ChartJsCircular extends React.Component {
  componentDidMount() {
    window.removeEventListener("keyup", this.keyHandling);
  }

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Doughnut</CardTitle>
                    <DoughnutExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Dynamic Doughnut Chart</CardTitle>
                    <DynamicDoughnutExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Radar Chart</CardTitle>
                    <RadarExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Polar Chart</CardTitle>
                    <PolarExample />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Pie Chart</CardTitle>
                    <PieExample />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
