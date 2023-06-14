import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/Images/Banner/instructorBanner.jpg";
import SharedBanner from "../Shared/SharedBanner";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  // const axios = useAxiosSecure();
  // const { data: users = [] } = useQuery({
  //   queryKey: ["instructors"],
  //   queryFn: async () => {
  //     const res = await axios("/users");
  //     return res.data;
  //   },
  // });
  const [users ,setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }, [])
  console.log(users);
  const instructors = users.filter(
    (instructor) => instructor?.role === "instructor"
  );
  console.log(instructors);
  return (
    <div>
      <SharedBanner
        img={BannerImg}
        name="Our Instructors"
        msg="Meet our talented instructors"
      ></SharedBanner>
      
      <div className="my-20 md:grid md:grid-cols-3 md:gap-10">
        {
            instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructor;
