import React from "react";

const Form = () => {
  return (
    <div className="container">
      <form action="">
        <h1>login form</h1>
        <div className="form-body">
          <div className="username">
            <label>Username</label>
            <input type="text" name="username" id="" placeholder="ur name" />
          </div>
          <div className="email">
            <label>email</label>
            <input type="email" name="emali" id="" placeholder="ur email" />
          </div>
          <div className="password">
            <label>password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="ur password"
            />
					</div>
					<button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
