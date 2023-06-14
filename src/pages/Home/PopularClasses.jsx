import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';

const PopularClasses = () => {
    const [allClasses,setAllClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setAllClasses(data))
    }, [])

    // console.log(allClasses);
    const popular = allClasses.filter(item => item?.student_enrolled > 0)
    // console.log(popular);
    return (
        <div className='my-14'>
            <h1 className='text-center text-3xl text-blue-700 font-semibold underline my-20' >Our Popular Classes</h1>
            <div className='md:grid md:grid-cols-3 md:gap-10'>
            {
                popular.map(item => <PopularCard key={item._id} item={item}></PopularCard> )
            }
            </div>
        </div>
    );
};

export default PopularClasses;