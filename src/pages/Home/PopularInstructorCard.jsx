import React from 'react';

const PopularInstructorCard = ({instructor}) => {
    return (
        <div className="card w-full shadow-2xl">
        <figure><img src={instructor.photoURL} alt="Instructor" className='w-full' /></figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name:  {instructor.name}</h2>
          <p>{instructor.email}</p>
          
        </div>
      </div>
    );
};

export default PopularInstructorCard;