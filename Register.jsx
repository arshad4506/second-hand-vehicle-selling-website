import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        form.email.toLowerCase()
    );

    if (alreadyExists) {
      alert("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration successful! Please login.");

    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    window.showPage("loginPage");
  };

  return (
    <div className="register-page">
      <div className="container">

        <div className="auth-box">
          <h1>Create Account</h1>

          <p>Register for your Auto Bazaar account</p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name *</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password *</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password *</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit">
              Register
            </button>

          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() =>
                window.showPage("loginPage")
              }
            >
              Login
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;