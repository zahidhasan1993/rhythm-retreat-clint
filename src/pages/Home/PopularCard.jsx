import React from "react";

const PopularCard = ({ item }) => {
    const {availableSeats} = item;
    const newSeat = parseFloat(availableSeats) - item.student_enrolled;
    // console.log(newSeat);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt="class"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.className}</h2>
        <p>{item.email}</p>
        <p>Available Seats : {newSeat}</p>
      </div>
    </div>
  );
};

export default PopularCard;
