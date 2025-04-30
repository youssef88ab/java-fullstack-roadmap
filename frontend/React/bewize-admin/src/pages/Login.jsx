import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import adminAnimation from "../animations/admin-dashboard.json";
import CircularProgress from "@mui/material/CircularProgress";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faL,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Passwrod State
  const [showPassword, setShowPassword] = useState(false);

  // Loading State
  const [loading, setLoading] = useState(false);

  // 1. Creates Defualt User in first Load
  useEffect(() => {
    const existingUser = localStorage.getItem("testuser@example.com");
    if (!existingUser) {
      const defaultUser = {
        name: "Test User",
        email: "testuser@example.com",
        password: "123456",
      };
      localStorage.setItem(defaultUser.email, JSON.stringify(defaultUser));
    }
  }, []);

  // 2. Handle Login
  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      try {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
          if (userData.password === data.password) {
            toast.success("You are successfully logged in");
          } else {
            toast.error("Incorrect email or password", {
            });
          }
        } else {
          toast.error("Incorrect email or password");
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  // Toggle Password
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Panel - Login Form */}
        <div className="w-full md:w-2/5 bg-gradient-to-b from-indigo-950 to-indigo-900 flex flex-col">
          <div className="flex flex-col h-full justify-start gap-4 md:gap-10 p-6 md:p-12">
            {/* Logo and Brand Header */}
            <div className="flex flex-row items-center justify-start w-full max-w-sm mx-auto gap-2">
              <img
                className="w-6 md:w-8"
                src="https://cdn.prod.website-files.com/61241693df6a919162546d4e/612d214b1c0a550f86c31148_Frame%20223.png"
                alt="Bewize Logo"
              />
              <h1 className="text-lg md:text-2xl font-bold text-indigo-100">
                Bewize
              </h1>
            </div>

            <div className="flex justify-center items-center w-full">
              <h2 className="text-center text-indigo-100 text-3xl font-bold">
                Sign In
              </h2>
            </div>

            {/* Login Form Content */}
            <div className="flex flex-col items-center justify-start w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm"
              >
                {/* Email Input with Icon */}
                <div className="mb-4 md:mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-100"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="email"
                      className="bg-indigo-950 outline-none border border-indigo-700 text-indigo-50 text-sm rounded-lg focus:ring-indigo-400 focus:border-indigo-400 block w-full pl-10 pr-4 py-2.5 placeholder-indigo-400"
                      placeholder="name@example.com"
                      disabled={loading}
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                </div>

                {/* Password Input with Icon */}
                <div className="mb-4 md:mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-indigo-100"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="bg-indigo-950 outline-none border border-indigo-700 text-indigo-50 text-sm rounded-lg focus:ring-indigo-400 focus:border-indigo-400 block w-full pl-10 pr-4 py-2.5 placeholder-indigo-400 "
                      placeholder="••••••••"
                      disabled={loading}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300">
                      <FontAwesomeIcon icon={faLock} />
                    </span>

                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-300">
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePassword}
                      />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 md:mb-5">
                  <a
                    href="#"
                    className="text-sm text-indigo-300 hover:text-indigo-200 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-lg transition duration-200 font-medium"
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
            </div>

            {/* Footer area */}
            <div className="card-footer text-indigo-300 text-sm mt-auto max-w-sm mx-auto"></div>
          </div>
        </div>

        {/* Right Panel - Brand/Info Panel */}
        <div className="w-full md:w-3/5 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white flex items-center justify-center p-6 md:p-0">
          <div className="max-w-md p-4 md:p-8 flex flex-col items-center text-center">
            {/* Lottie Animation */}
            <Lottie
              animationData={adminAnimation}
              loop={true}
              className="w-100 h-100 mb-6"
            />


          </div>
        </div>
      </div>
    </>
  );
}
