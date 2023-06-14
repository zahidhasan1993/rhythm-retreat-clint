import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageClassesTable from "./ManageClassesTable";
import Swal from "sweetalert2";
import useChangeTitle from "../../Hooks/useChangeTitle";

const ManageClasses = () => {
  useChangeTitle('manageClass | Rhythm-Retreat')
  const axios = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios("/classes");
      return res.data;
    },
  });
  const handleApproved = (item) => {
    
    // console.log(item)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Approve ${item.className}!!!`,
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`https://rhythm-retreat-server.vercel.app/classes/approve/${item._id}`, {
        //   method: "PATCH",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.modifiedCount) {
        //       Swal.fire(`${item.className} is now Approved`);
        //       refetch();
        //     }
        

        //   });
        axios.patch(`/classes/approve/${item._id}`)
        .then(data => {
          if (data.data.modifiedCount) {
                  Swal.fire(`${item.className} is now Approved`);
                  refetch();
                }
        })
      }
    });
  }
  const handleDeny = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Deny ${item.className}!!!`,
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`https://rhythm-retreat-server.vercel.app/classes/deny/${item._id}`, {
        //   method: "PATCH",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.modifiedCount) {
        //       Swal.fire(`${item.className} is now denied`);
        //       refetch();
        //     }
        //   });
        axios.patch(`/classes/deny/${item._id}`)
        .then(data => {
          if (data.data.modifiedCount) {
                  Swal.fire(`${item.className} is now Denied`);
                  refetch();
                }
        })
      }
    });
  }
  // console.log(classes);
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
                classes.map((item,index) => <ManageClassesTable key={item._id} index={index} item={item} handleApproved={handleApproved} handleDeny={handleDeny}></ManageClassesTable>)
            }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
