import React from "react";
import { Form, Button, FormControl, Dropdown } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import SearchIcon from "../../../images/search.svg";
import UserIcon from "../../../images/user-icon.png";
import LampIcon from "../../../images/lamp.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <Form className="search-boxs">
        <FormControl type="text" placeholder="Search" />
        <Button variant="light">
          <img src={SearchIcon} />
        </Button>
      </Form>
      <div className="reports-list">
        <Dropdown className="reports">
          <Dropdown.Toggle id="reports">
            <i className="icon-report"></i>Reports
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">1st menu item</Dropdown.Item>
            <Dropdown.Item href="#">2nd menu item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">3rd menu item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="tools">
          <Dropdown.Toggle id="tools">
            <i className="icon-tool-setting"></i>Tools & Settings
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <ul>
              <li>
                <a href="#">
                  <i className="icon-billing"></i>Billing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-settings"></i>Setup
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-measurment"></i>Measurment
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-bulk-action"></i>Bulk Actions
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-shared-liberary"></i>Shared Library
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-planning"></i>Planning
                </a>
              </li>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="user-list">
        <Dropdown className="help">
          <Dropdown.Toggle variant="success" id="help">
            <i className="icon-question"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">1st menu item</Dropdown.Item>
            <Dropdown.Item href="#">2nd menu item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">3rd menu item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="notification">
          <Dropdown.Toggle id="notification">
            <i className="icon-notification"></i>
            <span>1</span>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            <a href="#" className="icon-close close-btn"></a>
            <h2>Notifications</h2>
            <Scrollbars autoHide style={{ width: "100%", height: 510 }}>
              <div className="notification-main">
                <div className="notification-boxs">
                  <i className="icon-question"></i>
                  <div className="content">
                    <h3>Has been industry's standard</h3>
                    <p>
                      Has been the industry's standard dummy since the is simply
                      dummy text of the and typesetting industry been thes.
                    </p>
                    <div className="detail-box">
                      <a href="#" className="view">
                        <i className="icon-view"></i>View
                      </a>
                      <a href="#" className="dismiss">
                        <i className="icon-dislike"></i>Dismiss
                      </a>
                      <a href="#" className="calendar ml-auto">
                        <i className="icon-calendar"></i>12.02.2020
                      </a>
                    </div>
                  </div>
                </div>
                <div className="notification-boxs">
                  <img src={LampIcon} />
                  <div className="content">
                    <h3>Has been industry's standard</h3>
                    <p>
                      Has been the industry's standard dummy since the is simply
                      dummy text of the and typesetting industry been thes.
                    </p>
                    <div className="detail-box">
                      <a href="#" className="view">
                        <i className="icon-view"></i>View
                      </a>
                      <a href="#" className="dismiss">
                        <i className="icon-dislike"></i>Dismiss
                      </a>
                      <a href="#" className="calendar ml-auto">
                        <i className="icon-calendar"></i>12.02.2020
                      </a>
                    </div>
                  </div>
                </div>
                <div className="notification-boxs">
                  <img src={LampIcon} />
                  <div className="content">
                    <h3>Has been industry's standard</h3>
                    <p>
                      Has been the industry's standard dummy since the is simply
                      dummy text of the and typesetting industry been thes.
                    </p>
                    <div className="detail-box">
                      <a href="#" className="view">
                        <i className="icon-view"></i>View
                      </a>
                      <a href="#" className="dismiss">
                        <i className="icon-dislike"></i>Dismiss
                      </a>
                      <a href="#" className="calendar ml-auto">
                        <i className="icon-calendar"></i>12.02.2020
                      </a>
                    </div>
                  </div>
                </div>
                <div className="notification-boxs">
                  <img src={LampIcon} />
                  <div className="content">
                    <h3>Has been industry's standard</h3>
                    <p>
                      Has been the industry's standard dummy since the is simply
                      dummy text of the and typesetting industry been thes.
                    </p>
                    <div className="detail-box">
                      <a href="#" className="view">
                        <i className="icon-view"></i>View
                      </a>
                      <a href="#" className="dismiss">
                        <i className="icon-dislike"></i>Dismiss
                      </a>
                      <a href="#" className="calendar ml-auto">
                        <i className="icon-calendar"></i>12.02.2020
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Scrollbars>
            <a href="#" className="configure-btn">
              <i className="icon-right-arrow"></i>
              Configure Notification Settings
            </a>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="user-box">
          <Dropdown.Toggle id="user">
            <p>
              Gulliver & Co<span>guliver@support.com</span>
            </p>
            <img src={UserIcon} />
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            <ul>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Quick reference map
                </a>
                <i className="icon-expand ml-auto"></i>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>New Features &
                  Announcements
                </a>
                <i className="icon-expand ml-auto"></i>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Guided Steps
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Leave Feedback
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Get Help
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Keyboard shortcuts
                </a>
              </li>
            </ul>
            <ul className="worldwide-boxs">
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Worldwide phone support
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Customer ID :{" "}
                  <span>493-057-1492</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-humber-arrow"></i>Verify support request
                </a>
              </li>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};
