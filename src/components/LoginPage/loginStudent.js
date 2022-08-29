import React from "react";
import "./loginStudent.scss";
import ima from "../../assets/student.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
class LoginStudent extends React.Component {
  render() {
    return (
      <div style={{ alignItems: "center" }}>
        <img src={ima} style={{ width: "100%" }} alt="student" />
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="username"
            id="usernamestudent"
            required
          />
          <label htmlFor="username" className="form__label">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="Password"
            name="pass"
            id="passstudent"
            required
          />
          <label htmlFor="password" className="form__label">
            Password
          </label>
        </div>
        <button type="button" className="btn btn-outline-info login">
          Login
        </button>
        <p>Don't have account?
        </p>
      </div>
    );
  }
}
export default LoginStudent;
