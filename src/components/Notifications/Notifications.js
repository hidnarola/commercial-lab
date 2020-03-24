import React, { useEffect, useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";

import SearchIcon from "../../images/search.svg";
import PlusIcon from "../../images/plus.svg";
import EditIcon from "../../images/edit.svg";
import DeleteIcon from "../../images/trash.svg";
import "./Notifications.scss";

const Notifications = () => {
  const [ntofication, setNotification] = useState(null);
  const getNotificationUrl =
    "https://repo.commercial-lab.com/api/v1/Notifications";
  useEffect(() => {
    axios
      .get(getNotificationUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwOWY3N2E2Y2UwYWUyMGZkNThjNGYyYmVhYmM0ODVkIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1ODUwMjQxMjUsImV4cCI6MTU4NTA2NzMyNSwiaXNzIjoiaHR0cDovL2NscmVwby5iYWNrZW5kIiwiYXVkIjpbImh0dHA6Ly9jbHJlcG8uYmFja2VuZC9yZXNvdXJjZXMiLCJ0ZWxldGVsIl0sImNsaWVudF9pZCI6InNwYSIsInN1YiI6IjUyMDJjNDhkLTIyMDMtNDU5NC05N2U5LTMyNDBmODYyOTgwMyIsImF1dGhfdGltZSI6MTU4NTAyNDEyNSwiaWRwIjoibG9jYWwiLCJuYW1lIjoi0JDQtNC80LjQvdC40YHRgtGA0LDRgtC-0YAiLCJlbWFpbCI6Im1haWxAbWFpbC5ydSIsInBpY3R1cmUiOiJodHRwOi8vd3d3Lm5yZXRuaWwuY29tL2F2YXRhci9MYXdyZW5jZUV6ZWtpZWxBbW9zLnBuZyIsImFkZHJlc3MiOiLQnNC-0YHQutCy0LAsINGD0LsuINCT0YDRg9C30LjQvdGB0LrQuNC5INCS0LDQuywgMjgvNDUiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsInNjb3BlIjpbImVtYWlsIiwib3BlbmlkIiwicHJvZmlsZSIsInRlbGV0ZWwiXSwiYW1yIjpbInB3ZCJdfQ.W8L15A4HtOqwnIQR-f9TIQOVYHHbMqxzMkW7fkor0cz7GdYHhVLY_a2a0FqmwCfh6J9wlTU71KFhBihLr65F_ww6zEuXyTWUXqw9Stvel_TBBzdqaF5YfLaaguoiZ3LvBMKZTg5wv_tdxFjaIxw0-eICA33svQniS68KMIPpNM68mYbKnJly97v0WUKrBJTQXyBEjsML7gno4L57U9puk63kpLYseGATuV0AUxh3lnAyOIQ9J5U_1kO_GMXW6Zgs5a_hQYj4JJLfvDCC5hAchWwnlgo3airgbCFEYn7cIEivDcgfTLdiMMjCRq49xHTapysEABh5jOiDL5locVWM5w"
        }
      })
      .then(res => {
        console.log("res => ", res);
        setNotification(res.data.notifications);
        // let data = JSON.stringify(res.data.notifications);
        // console.log("data => ", data);
      })
      .catch(err => {
        console.log("err ==>", err);
      });
  }, []);
  console.log("ntofication", ntofication);
  return (
    <div className="main-content">
      <div className="title">My Notification Settings</div>
      <div className="card">
        <div className="card-header">
          <Form className="search-boxs">
            <FormControl type="text" placeholder="Search" />
            <Button variant="light">
              <img src={SearchIcon} />
            </Button>
          </Form>
          <a href="#" className="btn btn-link">
            Add Notification <img src={PlusIcon} />
          </a>
        </div>

        <div className="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Severity</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {ntofication &&
                ntofication.map(data => (
                  <tr>
                    <td>{data.notificationId}</td>
                    <td>{data.class}</td>
                    <td>{data.headline}</td>
                    <td>Import</td>
                    <td>
                      <select name="high" id="high" class="form-control">
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                      </select>
                    </td>
                    <td>
                      <a href="#">
                        <img src={EditIcon} />
                        Edit
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <img src={DeleteIcon} />
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
