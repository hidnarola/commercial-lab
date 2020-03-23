import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Navbar, Nav } from "react-bootstrap";
import LogoIcon from "../images/lab.svg";
import { NavLink, withRouter } from "react-router-dom";
import "./Sidebar.scss";
// import { withRouter } from "react-router-dom";

const Sidebar = props => {
  const [open, setopen] = useState(false);
  const { location } = props;
  console.log("props,location =>", props);

  return (
    <Navbar expand="true" className={open ? "sliderbar open" : "sliderbar"}>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setopen(!open)}
      />
      <Navbar.Brand href="#">
        <img src={LogoIcon} />
        <h3>Commercial Lab</h3>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Scrollbars autoHide style={{ width: "100%" }}>
          <ul>
            <li>
              <Nav.Link
                href="/overview"
                className={location.pathname === "/overview" ? "active" : ""}
              >
                <i className="icon-overview"></i>
                <span>Overview</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/recommendations"
                className={
                  location.pathname === "/recommendations" ? "active" : ""
                }
              >
                <i className="icon-recommendations"></i>
                <span>Recommendations</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/compaigns"
                className={location.pathname === "/compaigns" ? "active" : ""}
              >
                <i className="icon-compaigns"></i>
                <span>Compaigns</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/adGroups"
                className={location.pathname === "/adGroups" ? "active" : ""}
              >
                <i className="icon-ad-groups"></i>
                <span>Ad Groups</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/productGroups"
                className={
                  location.pathname === "/productGroups" ? "active" : ""
                }
              >
                <i className="icon-product-groups"></i>
                <span>Product Groups</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/addExtensions"
                className={
                  location.pathname === "/addExtensions" ? "active" : ""
                }
              >
                <i className="icon-add-extensions"></i>
                <span>Ads & Extensions</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/landingPage"
                className={location.pathname === "/landingPage" ? "active" : ""}
              >
                <i className="icon-landing-pages"></i>
                <span>Landing Pages</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/keywords"
                className={location.pathname === "/keywords" ? "active" : ""}
              >
                <i className="icon-keyword"></i>
                <span>Keywords</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="/audiences"
                className={location.pathname === "/audiences" ? "active" : ""}
              >
                <i className="icon-audiences"></i>
                <span>Audiences</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#">
                <i className="icon-demographics"></i>
                <span>Demographics</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#">
                <i className="icon-placements"></i>
                <span>Placements</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#">
                <i className="icon-settings"></i>
                <span>Settings</span>
              </Nav.Link>
            </li>
          </ul>
        </Scrollbars>
      </Navbar.Collapse>
    </Navbar>
  );
};

// export default Sidebar;
export default withRouter(Sidebar);
