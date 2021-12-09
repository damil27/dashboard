import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Business,
  Paid,
  Assessment,
  Mail,
  Feedback,
  Message,
  Work,
  AutoGraph,
  Summarize,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <Person className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Business className="sidebarIcon" />
                Product
              </li>
            </Link>
            <li className="sidebarListItem">
              <Paid className="sidebarIcon" />
              Trensaction
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Work className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <AutoGraph className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Summarize className="sidebarIcon" />
              report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
