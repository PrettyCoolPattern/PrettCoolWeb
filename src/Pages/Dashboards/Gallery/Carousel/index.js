import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import CarouselDefault from "./Carousel";
import CustomExample from "./CustomTag";

const CarouselBSExample = (props) => {
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
        <Col width="100%">
              <CarouselDefault />
        </Col>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default CarouselBSExample;
