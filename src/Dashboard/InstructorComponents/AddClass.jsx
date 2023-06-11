import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <div className="hero min-h-screen">
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body md:grid md:grid-cols-2"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                type="text"
                placeholder="Class Name"
                {...register("className", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                placeholder="instructor name"
                {...register("instructorName")}
                className="input input-bordered"
                defaultValue={user.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="text"
                placeholder="instructor Email"
                {...register("instructorEmail")}
                className="input input-bordered"
                defaultValue={user.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="text"
                placeholder="Avaible Seats"
                {...register("availableSeats")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                {...register("price")}
                className="input input-bordered"
              />
            </div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered file-input-primary mt-9 w-full max-w-xs"
            />
            <div className="form-control mt-6 md:col-span-2">
              <button className="btn btn-primary">Add Class</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
