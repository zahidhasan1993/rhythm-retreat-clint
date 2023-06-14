import React, { useEffect, useState } from "react";
import bannerIMG from "../../assets/Images/Banner/istockphoto-1252765952-170667a.jpg";
import SharedBanner from "../Shared/SharedBanner";
import ClassesCard from "./ClassesCard";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const Classes = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axios = useAxiosSecure();
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleSelect = (item) => {
    const { className, image, name, price, _id } = item;
    // console.log(item);

    if (!user) {
      navigate("/login");
      // console.log(user);
      return;
    }
    const myClass = { class_id: _id, image, className, price: parseFloat(price), instructor_name : name, email: user?.email };
    if (user) {
        axios.post('/cart',myClass)
        .then(data => {
            console.log(data.data);
            if (data.data.acknowledged) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            
            }
        })
    }
    
    console.log(myClass);
  };
  // console.log(classes);
  const newCLasses = classes.filter((item) => item.status === "approved");
  // console.log(newCLasses);

  return (
    <div className="">
      <SharedBanner
        img={bannerIMG}
        name="Our Classes"
        msg="explore Our Classes and choose your passion"
      ></SharedBanner>
      <div className="my-20 md:grid md:grid-cols-3 md:gap-10">
        {newCLasses.map((item) => (
          <ClassesCard key={item._id} item={item} handleSelect={handleSelect}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
