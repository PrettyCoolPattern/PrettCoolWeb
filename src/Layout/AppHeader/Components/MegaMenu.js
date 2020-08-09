import React, { Fragment } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Popover,
  Nav,
  NavLink,
  Col,
  Row,
  NavItem,
  UncontrolledButtonDropdown,
  Button,
} from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

import bg2 from "../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg10 from "../../../assets/utils/images/dropdown-header/abstract10.jpg";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MegaMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      popoverOpen: !this.state.popoverOpen,
    });
  }

  state = {};

  render() {
    return (
      <Fragment>
        <Nav className="header-megamenu">
          <NavItem>
            <NavLink href="#" onClick={this.toggle} id="PopoverMegaMenu">
              <i className="nav-link-icon pe-7s-folder"> </i>
              Directory
              <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown} />
            </NavLink>
          </NavItem>
          <Popover className="rm-max-width" placement="bottom-start" fade={false} trigger="legacy"
            isOpen={this.state.popoverOpen} target="PopoverMegaMenu" toggle={this.toggle}>
            <div className="dropdown-mega-menu">
              <div className="grid-menu grid-menu-3col">
                <Row className="no-gutters">
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">Main Portals</NavItem>
                      <NavItem>
                        <NavLink href="prettycoolpattern.com">
                          <i className="nav-link-icon lnr-home"> </i>
                          <span>Home</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          <i className="nav-link-icon lnr-question-circle"> </i>
                          <span>About</span>
                          <div className="ml-auto">
                            
                          </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          <i className="nav-link-icon lnr-cart"> </i>
                          <span>Shop</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          <i className="nav-link-icon lnr-envelope"> </i>
                          <span>Contact</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">Favorites</NavItem>
                      <NavItem>
                        <NavLink href="#"><i className="nav-link-icon lnr-picture"> </i>Visual Arts</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#"> <i className="nav-link-icon lnr-music-note"> </i>
                          Audio Arts
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#"> <i className="nav-link-icon lnr-pencil"> </i>Writing</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#"> <i className="nav-link-icon lnr-code"> </i>Game Development
                          <div className="ml-auto badge badge-success">New</div>    </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">
                        Services &amp; Information
                      </NavItem>
                      <NavItem>
                        <NavLink href="#"> <i className="nav-link-icon lnr-magic-wand"> </i>Professional Services </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#"> <i className="nav-link-icon lnr-database"> </i>PCP Metrics + Statistics</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                        <i className="nav-link-icon lnr-users"> </i>Meet The Team
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#"> <i className="nav-link-icon lnr-star"> </i>Donate</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </div>
            </div>
          </Popover>
          <UncontrolledButtonDropdown nav inNavbar>
            
          </UncontrolledButtonDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <i className="nav-link-icon pe-7s-magnet"> </i>
              Quick Actions
              <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown} />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-rounded dropdown-menu-lg rm-pointers">
              <div className="dropdown-menu-header">
                <div className="dropdown-menu-header-inner bg-success">
                  <div className="menu-header-image opacity-4"
                    style={{
                      backgroundImage: "url(" + bg10 + ")",
                    }}>
                  </div>
                  <div className="menu-header-content text-left">
                    <h5 className="menu-header-title">Quick Actions</h5>
                    <div className="menu-header-btn-pane">
                      <Button size="sm" color="dark" className="mr-2"> Contact </Button>
                      <Button size="sm" className="btn-icon btn-icon-only" color="focus">
                        <i className="pe-7s-home btn-icon-wrapper"> </i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <DropdownItem>
                <i className="dropdown-icon pe-7s-pendrive"> </i>
               Services
              </DropdownItem>
              <DropdownItem>
                <i className="dropdown-icon lnr-file-empty"> </i>
                Art Gallery
              </DropdownItem>
              <DropdownItem>
                <i className="dropdown-icon lnr-file-empty"> </i>
                Shop
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="dropdown-icon lnr-file-empty"> </i>
                About
              </DropdownItem>
              <DropdownItem>
                <i className="dropdown-icon lnr-file-empty"> </i>
                Contact
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <div><strong>            PrettyCoolPattern</strong></div><div>
   <small>Services, Arts, Media + Entertainment.</small> </div>
      </Fragment>
    );
  }
}

export default MegaMenu;
