import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import EnrolledClassesCard from "./EnrolledClassesCard";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myClasses"],
    queryFn: async () => {
      const res = await axios(`/myclasses/${user?.email}`);
      return res.data;
    },
  });
  console.log(myClasses);
  return (
    <div className="w-full px-20">
      <h1 className="text-center text-3xl font-semibold underline my-20">
        My Enrolled Classes
      </h1>
      <div className="md:grid md:grid-cols-3 md:gap-10">
        {myClasses.map((myClass) => (
          <EnrolledClassesCard key={myClass._id} myClass={myClass}></EnrolledClassesCard>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClasses;
