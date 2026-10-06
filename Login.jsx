import React from "react";

function Login() {
  return (
    <section id="loginPage" className="page">
      <div className="container">
        <div className="auth-box">
          <div className="section-head">
            <div>
              <div className="eyebrow">Welcome Back</div>
              <h2>Login</h2>
            </div>
          </div>

          <form id="loginForm">
            <div className="field">
              <label htmlFor="loginEmail">Email or Mobile</label>
              <input
                id="loginEmail"
                type="text"
                placeholder="Enter email or mobile"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="loginPassword">Password</label>
              <input
                id="loginPassword"
                type="password"
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>

            <button
              type="button"
              className="btn btn-link"
              onClick={() => window.forgotPassword?.()}
            >
              Forgot Password?
            </button>
          </form>

          <p>
            Don't have an account?{" "}
            <button
              type="button"
              className="btn btn-link"
              onClick={() => window.showPage?.("registerPage")}
            >
              Register
            </button>
          </p>

          <div id="loginMessage"></div>
        </div>
      </div>
    </section>
  );
}

export default Login;