import React from "react";
import ReactModal from "react-modal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Feedback = ({ isOpen, closeModal, item }) => {
  const axios = useAxiosSecure();
  const handleSUbmit = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log(feedback);
    // console.log(item._id);
    axios.patch(`/classes/feedback/${item._id}`, {feedback}).then((data) => {
    //   console.log(data.data);
      if (data.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Feedback given to ${item.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      }
    });

  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <form
        onSubmit={handleSUbmit}
        className="w-full md:flex md:justify-center md:items-center gap-2"
      >
        <textarea
          className="textarea textarea-info w-1/2 ml-10"
          name="feedback"
          placeholder="Feedback"
        ></textarea>
        <input
          className="btn btn-outline text-blue-700 hover:bg-blue-700"
          type="submit"
        ></input>
      </form>
      <button
        onClick={closeModal}
        className="btn btn-error md:mx-[35rem] mt-10"
      >
        Close
      </button>
    </ReactModal>
  );
};

export default Feedback;
