import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import SelectedClassTable from "./SelectedClassTable";
import Swal from "sweetalert2";
import useChangeTitle from "../../Hooks/useChangeTitle";

const SelectedClasses = () => {
  useChangeTitle('SelectClass | rhythm-retreat')
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axios(`/cart/${user?.email}`);
      return res.data;
    },
  });
//   console.log(carts);
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/cart/delete/${id}`).then((data) => {
        //   console.log(data.data);

          if (data.data.acknowledged) {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="w-full ml-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => (
              <SelectedClassTable
                key={cart._id}
                cart={cart}
                index={index}
                handleDelete={handleDelete}
              ></SelectedClassTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
