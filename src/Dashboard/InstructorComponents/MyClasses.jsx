import { useQuery } from "@tanstack/react-query";
import React from "react";
import MyclassesTable from "./MyclassesTable";
import useAuth from "../../Hooks/useAuth";
import useChangeTitle from "../../Hooks/useChangeTitle";

const MyClasses = () => {
  useChangeTitle('MyClass | Rhythm-Retreat')
  const {user} = useAuth();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
    const res = await fetch("https://rhythm-retreat-backend.vercel.app/classes")
      return res.json()
    },
  });
  const myClasses = classes.filter(myClass => myClass.email === user.email)

  // console.log(myClasses);
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
              myClasses.map((item,index) => <MyclassesTable key={item._id} item={item} index={index}></MyclassesTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
