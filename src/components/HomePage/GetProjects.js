import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./GetProjects.css";

const GetProjects = () => {
  return (
    <div className="icon">
      <img src={logoImg} alt="logo-img" className="logo-img" />

      <div className="form-field">
        <h3 className="text-registration-1-form">Registration form</h3>
        <h1 className="text-registration-2-form">
          Start your success
          <br />
          journey here!.
        </h1>
      </div>
      <div>
        <form>
          <input className="" type="text" id="name" name="name" />
          <br></br>
          <input className="" type="email" id="email" name="email" />
          <br></br>
          <input className="" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default GetProjects;
