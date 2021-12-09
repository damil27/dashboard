import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle"> New User</h1>
      <form action="" className="newUserForm">
        <div className="userFormItem">
          <label> User Name </label>
          <input type="text" placeholder="User Name" />
        </div>
        <div className="userFormItem">
          <label> Full Name </label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="userFormItem">
          <label> e-mail </label>
          <input type="email" placeholder="example@mail.com" />
        </div>
        <div className="userFormItem">
          <label> Mobile </label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="userFormItem">
          <label> Address </label>
          <input type="text" placeholder="Address" />
        </div>
        <div className="userFormItem">
          <div className="newUserGender">
            <label> Gender </label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="userFormItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
        </div>
        <div className="userBtn" >

        <button className="newUserButton"> Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
