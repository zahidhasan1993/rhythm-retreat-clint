import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ClassesCard = ({ item, handleSelect }) => {
  const { availableSeats, className, image, name, price } = item;
  // console.log(item);

  const { user } = useAuth();
  const axios = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios("/users");
      return res.data;
    },
  });
  const loginUser = users.find((data) => data?.email === user?.email);

  // console.log(loginUser?.role);
  return (
    <div
      className={
        availableSeats === "0"
          ? "card w-full bg-red-700 shadow-xl"
          : "card w-full shadow-xl"
      }
    >
      <figure>
        <img src={image} alt="Class Image" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Instructor Name : {name}</p>
        <p>Available Seats : {availableSeats}</p>
        <p>
          Cost : <span className="text-amber-700">${price}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSelect(item)}
            className="btn btn-outline text-blue-700 hover:bg-blue-700"
            disabled={
              loginUser?.role === "instructor" ||
              loginUser?.role === "admin" ||
              availableSeats === 0
            }
          >
            Select This
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
