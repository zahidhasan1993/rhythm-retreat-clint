import React from "react";
import Swal from 'sweetalert2'

const FeedBack = () => {
  const handleSubmit = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'FeedBack Submited',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
      <h1 className=" mb-6 text-3xl font-bold text-center text-amber-700 underline">Give Us A Feedback</h1>
        <div className="card w-full shadow-2xl bg-base-100">
          
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <textarea
                id="feedback"
                placeholder="Enter your feedback"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="form-control mt-6">
              <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;