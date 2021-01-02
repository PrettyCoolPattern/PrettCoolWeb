import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import HeaderLogo from "../AppLogo";

import SearchBox from "./Components/SearchBox";
import MegaMenu from "./Components/MegaMenu";
import UserBox from "./Components/UserBox";
import HeaderRightDrawer from "./Components/HeaderRightDrawer";
import ReactGA from "react-ga";
import { findDOMNode } from "react-dom";

import Login from "../../Login/Login";

import HeaderDots from "./Components/HeaderDots";

import SendToGoogleAnalytics from "./Components/analytics";
import { scale } from "chroma-js";

class Header extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.onClickGA.bind(this), false);
    ReactGA.initialize("UA-102481694-3");
  }
  componentDidUnmount() {
    document.removeEventListener("click", this.onClickGA.bind(this), false);
  }

  onClickGA(event) {
    ReactGA.pageview(window.location.href + window.location);
    const domNode = findDOMNode(event.target);
    ReactGA.outboundLink(
      {
        label: "Clicked :" + domNode.outerHTML,
      },
      function () {
        try {
        } catch (error) {}
      }
    );
  }

  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <HeaderLogo />
          <div
            className={cx("app-header__content", {
              "header-mobile-open": enableMobileMenuSmall,
            })}
          >
            <div className="app-header-left">
              <SearchBox />
              <MegaMenu />
            </div>
            <div className="app-header-right">
              {" "}
              <Login />
              <HeaderDots />
              <UserBox />
              <HeaderRightDrawer />
            </div>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
