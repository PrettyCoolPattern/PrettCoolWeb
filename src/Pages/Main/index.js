import React, { Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter } from "react-router-dom";

import ResizeDetector from "react-resize-detector";

import AppMain from "../../Layout/AppMain";

import { IoIosChatbubbles } from "react-icons/io";
import HeaderRightDrawer from "../Components/LiveChat/RightPopUpDrawer.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: true,
      RightDrawerActive: true,
      active: true,
    };
    this.openRightSidebar = this.openRightSidebar.bind(this);
  }
  openRightSidebar() {
    document.getElementById("ChatBlock").style.opacity = 1;
    document.getElementById("ChatBlock").hidden = false;
  }
  render() {
    let {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props;

    return (
      <ResizeDetector
        handleWidth
        render={({ width }) => (
          <Fragment>
            <div
              className={cx(
                "app-container app-theme-" + colorScheme,
                { "fixed-header": enableFixedHeader },
                { "fixed-sidebar": enableFixedSidebar || width < 1250 },
                { "fixed-footer": enableFixedFooter },
                { "closed-sidebar": enableClosedSidebar || width < 1250 },
                {
                  "closed-sidebar-mobile": closedSmallerSidebar || width < 1250,
                },
                { "sidebar-mobile-open": enableMobileMenu },
                { "body-tabs-shadow-btn": enablePageTabsAlt }
              )}
            >
              <AppMain />
            </div>
            <button
              style={{
                userSelect: "none",
                textDecoration: "none",
              }}
              onClick={() => this.openRightSidebar()}
              className="chatNotify zoom"
            >
              <IoIosChatbubbles
                size="50px"
                style={{
                  color: "white",
                  top: "-2px",
                  position: "relative",
                  left: "-9px",
                  userSelect: "none",
                }}
              />
            </button>
            <HeaderRightDrawer
              openRightSidebar={this.openRightSidebar}
              active={this.state.active}
              RightDrawerActive={this.state.RightDrawerActive}
            />
          </Fragment>
        )}
      />
    );
  }
}

const mapStateToProp = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default withRouter(connect(mapStateToProp)(Main));
