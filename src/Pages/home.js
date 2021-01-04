import react from "react";
import React, { Fragment } from "react";
import { useHistory } from "react-navi";
import { Route, Redirect } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "../Layout/AppHeader/Components/analytics";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickX = this.handleClick.bind(this);

    this.state = {
      sideBarVar: "1",
    };
  }

  componentDidMount() {}

  handleClick() {}

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup>
          <span
            className="landingContent"
            onClick={() => (window.location.hash = "/dashboards/home")}
          >
            <br />
            <span
              style={{
                position: "absolute",
                top: "25px",
                padding: "25px",
                zIndex:125,
                textAlign: "center",
              }}
            >
              PrettyCoolPattern Arts
            </span>
            <br />
            <span
              style={{
                position: "absolute",
                top: "155px",
                zIndex:125,
              }}
            >
              Click To Enter
            </span>{" "}
            <br />
            <img
              style={{
                width: window.innerWidth * 0.35,
                alignContent: "center",
                position: "absolute",
                maxWidth: "600px",
                maxHeight: "600px",
              }}
              src="/images/Mandala1kSeriesX.gif"
            ></img>
            <br />
            <br />
            <br />
            <br /> <br /> <br /> <br />
          </span>
        </CSSTransitionGroup>{" "}
      </Fragment>
    );
  }
}

export default LandingPage;
