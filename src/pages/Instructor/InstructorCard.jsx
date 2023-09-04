import React from "react";


const InstructorCard = ({instructor}) => {
 
    const {photoURL,email,name} = instructor;
    console.log(instructor);
  return (
    <div className="card w-full shadow-xl">
      <figure>
        <img
          src={photoURL}
          alt="Instructor Image"
          className="w-full h-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
