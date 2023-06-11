import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const imgApi = import.meta.env.VITE_IMG_API_KEY;
  const axios = useAxiosSecure();
  // console.log(imgApi);
  // const imgUploadURL = `"https://api.imgbb.com/1/upload?key=${imgApi}"`
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(`https://api.imgbb.com/1/upload?key=${imgApi}`,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imageData => {
      if (imageData.success) {
        const image = imageData.data.image.url;
        const {className,instructorEmail,instructorName,price,availableSeats} = data;
        const newData = {
          className,
          email: instructorEmail,
          name: instructorName,
          image : image,
          price,
          status : 'pending',
          availableSeats
        }
        axios.post('/classes/addclass', newData)
        .then(data => {
          console.log(data.data);
          if (data.data.acknowledged) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class Added',
              showConfirmButton: false,
              timer: 1500
            })
            reset();
          }
        })

      }
    })
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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
