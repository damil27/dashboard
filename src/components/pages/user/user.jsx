import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User </h1>
        <Link to="/newUser">
          <button className="userAddBtn">create</button>
        </Link>
      </div>
      <div className="userDisplayContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              className="userImage"
              src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?cs=srgb&dl=pexels-jimmy-jimmy-1484794.jpg&fm=jpg"
              alt="profile picture"
            />
            <div className="userDisplayTopTitle">
              <span className="userDisplayName">Kiki Banko</span>
              <span className="userDisplayRole"> Designer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userTitle">Account Details </span>
            <div className="userDisplayInfo">
              <CalendarToday className="userIcon" />
              <span className="userInfoTitle">2.12.2020</span>
            </div>
            <span className="userSubTitle">Account Details </span>

            <div className="userDisplayInfo">
              <PhoneAndroid className="userIcon" />
              <span className="userInfoTitle">+234 700 333 5663</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userIcon" />
              <span className="userInfoTitle">kik@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
              <LocationSearching className="userIcon" />
              <span className="userInfoTitle">Ring-Road Ibadan | Nigeria</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  placeholder="kik"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="full name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  placeholder="email"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  placeholder=" +234 344 666 333"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="kik"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImage"
                  src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?cs=srgb&dl=pexels-jimmy-jimmy-1484794.jpg&fm=jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userFileIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
