import React, { useState } from "react";
import RegisterLottie from "../../../assets/Images/Lottie/register.json";
import useChangeTitle from "../../../Hooks/useChangeTitle";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  useChangeTitle("Register | Rhythm-Retreate");
  const { googleLogin, emailRegister, userUpdate } = useAuth();

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Password did not matched !");
      return;
    }
    setError("");
    // console.log(data);
    if (data.password === data.confirmPassword) {
      emailRegister(data.email, data.password)
        .then(() => {
          userUpdate(data.name, data.photo)
            .then(() => {
              const user = { name: data.name, email: data.email};
              fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.insertedId) {
                    reset()
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Account Created Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/");
                  }
                });
            })
            .catch(() => {});
        })
        .catch(() => {});
    }
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: RegisterLottie,
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
          {error ? (
            <p className="text-red-700 my-10 text-center">{error}</p>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
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
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                {...register("photo", { required: true })}
                className="input input-bordered"
              />
              {errors.photoUrl && (
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[!@#$&*])(?=.*[A-Z])/,
                })}
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <span className="text-red-700">This field is required</span>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <span className="text-red-700">
                  Password Must Be 6 charecters long
                </span>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <span className="text-red-700">
                  Password Must have one uppercase and one special charecter
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-primary">Register</button>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline text-green-700 hover:bg-green-700"
              >
                Register With Google
              </button>
            </div>
            <Link to="/login">
              <p>
                All ready have an account?{" "}
                <span className="text-blue-700">Login here...</span>{" "}
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
