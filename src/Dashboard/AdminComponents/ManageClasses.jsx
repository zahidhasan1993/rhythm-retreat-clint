import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageClassesTable from "./ManageClassesTable";

const ManageClasses = () => {
  const axios = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios("/classes");
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                classes.map((item,index) => <ManageClassesTable key={item._id} index={index} item={item}></ManageClassesTable>)
            }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
