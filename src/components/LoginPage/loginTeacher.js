import React from "react";
import ima from "../../assets/teacher.png";
class LoginTeacher extends React.Component {
  render() {
    return (
      <>
        <>
          <img src={ima} style={{ width: "100%" }} alt="teacher" />
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              name="username"
              id="username"
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
              id="pass"
              required
            />
            <label htmlFor="username" className="form__label">
              Password
            </label>
          </div>
          <button type="button" className="btn btn-outline-info login">
            Login
          </button>
          <p>Don't have account? Register.</p>
        </>
      </>
    );
  }
}
export default LoginTeacher;
