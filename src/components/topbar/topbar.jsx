import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings, Language } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          {" "}
          <span className="logo">Damin Admin</span>{" "}
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            {/* <div>Settings </div> */}
          </div>
          <img
            src="https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk"
            alt=""
            className="topAvater"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
