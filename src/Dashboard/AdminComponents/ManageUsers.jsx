import { useQuery } from "@tanstack/react-query";
import React from "react";
import ManageUserTable from "./ManageUserTable";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const axios = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });
  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${user.name} Admin !!!`,
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //   method: "PATCH",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.modifiedCount) {
        //       Swal.fire(`${user.name} is now Admin`);
        //       refetch();
        //     }
        //   });
        axios.patch(`/users/admin/${user._id}`)
        .then(data => {
          console.log(data.data);
          if (data.data.modifiedCount) {
                Swal.fire(`${user.name} is now Admin`);
                refetch();
              }
        })
        
      }
    });
    // console.log(user);
  };
  const handleInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${user.name} Instructor !!!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`/users/instructor/${user._id}`)
        .then(data => {
          console.log(data.data);
          if (data.data.modifiedCount) {
                Swal.fire(`${user.name} is now Instructor`);
                refetch();
              }
        })
      }
      
    });
  };
  //   console.log(users);
  return (
    <div className="w-full px-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <ManageUserTable
                key={user._id}
                index={index}
                user={user}
                handleAdmin={handleAdmin}
                handleInstructor={handleInstructor}
              ></ManageUserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
