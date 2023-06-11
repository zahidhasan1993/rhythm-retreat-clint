import React from "react";
import useChangeTitle from "../../../Hooks/useChangeTitle";
import { useForm } from "react-hook-form";
import loginLottie from "../../../assets/Images/Lottie/Login.json";
import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
const Login = () => {
  useChangeTitle("Login | Rhythm-Retreate");
  const { googleLogin,emailLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailLogin(data.email,data.password)
    .then(() => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
          reset()

    })
    .catch(() => {})
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row gap-24">
        <div className="text-center md:w-1/2">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="card flex-shrink-0 md:w-1/2 shadow-2xl bg-base-100">
          <h1 className="text-2xl font-bold text-center mt-10 underline">
            Register Here!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[!@#$&*])(?=.*[A-Z])/,
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-700">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password Must Be 6 charecters long
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  Password Must have one uppercase and one special charecter
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-primary">Login</button>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline text-green-700 hover:bg-green-700"
              >
                Login With Google
              </button>
            </div>
            <Link to="/registration">
              <p>
                New to the website?{" "}
                <span className="text-blue-700">Register here...</span>{" "}
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
