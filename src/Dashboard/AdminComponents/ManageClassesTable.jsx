import React, { useState } from "react";
import Feedback from "./Feedback";
import Modal from 'react-modal';
Modal.setAppElement('#root')

const ManageClassesTable = ({ item, index, handleApproved, handleDeny }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
// console.log(item.feedback);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.className}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.availableSeats}</td>
      <td>${item.price}</td>
      <td>{item.status}</td>
      <th>
        <button
          onClick={() => handleApproved(item)}
          disabled={item?.status === "approved" || item?.status === "denied"}
          className="btn btn-xs btn-ghost"
        >
          Approve
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDeny(item)}
          className="btn btn-xs btn-ghost"
          disabled={item?.status === "approved" || item?.status === "denied"}
        >
          Deny
        </button>
      </th>
      <th>
        <div>
          <button onClick={openModal}>Send Feedback</button>
          <Feedback item={item} isOpen={modalIsOpen} closeModal={closeModal} />
        </div>
      </th>
    </tr>
  );
};

export default ManageClassesTable;
