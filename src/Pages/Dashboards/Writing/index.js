import React, { Component, Fragment } from "../../../../node_modules/react";
import CSSTransitionGroup from "../../../../node_modules/react-transition-group/CSSTransitionGroup";


import Tabs, { TabPane } from "../../../../node_modules/rc-tabs";
import TabContent from "../../../../node_modules/rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "../../../../node_modules/rc-tabs/lib/ScrollableInkTabBar";

// Examples


import WritingElements from "./writing";




// import PageTitle from "../Commerce";

export default class GalleryPage extends Component {
  render() {
    return ( 
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>

          
            <WritingElements />
                 </CSSTransitionGroup>
      </Fragment>
    )
    
  }
}
