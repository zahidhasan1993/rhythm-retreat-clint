import React, { useEffect, useState } from 'react';
import bannerIMG from '../../assets/Images/Banner/istockphoto-1252765952-170667a.jpg'
import SharedBanner from '../Shared/SharedBanner';
import ClassesCard from './ClassesCard';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const Classes = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
   const [classes,setClasses] = useState([]);
   useEffect(() => {
    fetch('http://localhost:5000/classes')
    .then(res => res.json())
    .then(data => setClasses(data))
   }, [])
    // console.log(classes);
    const newCLasses = classes.filter(item => item.status === 'approved')
    // console.log(newCLasses);
    const handleSelect = () => {
        if (!user) {
            navigate('/login')
            // console.log(user);
            return
        }
        console.log(user);
    }
    return (
        <div className=''>
            <SharedBanner img={bannerIMG} name="Our Classes" msg="explore Our Classes and choose your passion"></SharedBanner>
            <div className='my-20 md:grid md:grid-cols-3 md:gap-10'>
                {
                    newCLasses.map(item => <ClassesCard key={item._id} item={item} handleSelect={handleSelect}></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;