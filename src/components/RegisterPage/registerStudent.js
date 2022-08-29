import React from "react";

class RegisterStudent extends React.Component {
  render() {
    return (
      <>
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
            type="input"
            className="form__field"
            placeholder="phonenumber"
            name="phonenumber"
            id="phonenumber"
            required
          />
          <label htmlFor="phonenumber" className="form__label">
            Phone Number
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Address"
            name="address"
            id="address"
            required
          />
          <label htmlFor="address" className="form__label">
            Address
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
        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="Confirm Password"
            name="conpass"
            id="conpass"
            required
          />
          <label htmlFor="username" className="form__label">
            Confirm Password
          </label>
        </div>
        <button type="button" className="btn btn-outline-info login">
          Register
        </button>
      </>
    );
  }
}
export default RegisterStudent;
