import React, { useState } from "react";
import logo from "../Assets/logo.png";
import Dashboard from "./Dashboard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-20 w-auto" src={logo} alt="Workflow" />
              <h2 className="mt-6 text-center font-normal text-base leading-6 font-mulish text-green-600">
                We are Electric
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true" />

              <div className="flex flex-col">
                <label htmlFor="email-address" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 rounded-2xl shadow-md bg-gray-900 bg-opacity-60 text-white placeholder-white"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 rounded-2xl text-white bg-gray-900 shadow-md bg-opacity-60 placeholder-white"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <button className="p-3 text-white font-semibold rounded-2xl bg-gradient-to-r from-green-600 via-black to-green-900 w-full">
                  Login
                </button>
              </div>

              <div className="text-sm text-center">
                <a
                  href="#"
                  className="font-medium text-green-600 shadow-lg hover:text-green-900 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
