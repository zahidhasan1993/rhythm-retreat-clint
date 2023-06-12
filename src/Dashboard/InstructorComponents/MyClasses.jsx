import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyclassesTable from "./MyclassesTable";

const MyClasses = () => {
  const axios = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios("/classes");
      return res.data;
    },
  });
  // console.log(classes);
  return (
    <div className="w-full px-10">
      <h1 className="my-10 text-lg font-semibold">Total Students Enrolled : 0</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
               
              </th>
              <th></th>
              <th>Name</th>
              <th>status</th>
              <th>Total Student</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map((item,index) => <MyclassesTable key={item._id} item={item} index={index}></MyclassesTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
