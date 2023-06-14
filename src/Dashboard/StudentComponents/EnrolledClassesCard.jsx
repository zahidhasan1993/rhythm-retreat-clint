import React from 'react';

const EnrolledClassesCard = ({myClass}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={myClass.image} alt="Class"  className='w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">Instructor: {myClass.instructor_name}</h2>
          <p>Class Name: {myClass.className}</p>
          <p>Price : ${myClass.price}</p>
          
        
        </div>
      </div>
    );
};

export default EnrolledClassesCard;