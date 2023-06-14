import React, { useEffect, useState } from 'react';
import PopularInstructorCard from './PopularInstructorCard';

const OurInsturctors = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    console.log(users);
    const insturctors = users.filter(user => user.role === 'instructor')
    return (
        <div>
            <h1 className='text-center text-3xl text-blue-700 font-semibold underline my-20'>Popular Instructor</h1>
            <div className='md:grid md:grid-cols-3 md:gap-10'>
                {
                    insturctors.map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default OurInsturctors;