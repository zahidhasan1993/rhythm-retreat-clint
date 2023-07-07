import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import BannerTitle from '../Shared/BannerTitle';

const PopularClasses = () => {
    const [allClasses,setAllClasses] = useState([]);
    useEffect(() => {
        fetch('https://rhythm-retreat-backend.vercel.app/classes')
        .then(res => res.json())
        .then(data => setAllClasses(data))
    }, [])

    // console.log(allClasses);
    const popular = allClasses.filter(item => item?.student_enrolled > 0);
    const ourPopularClass = popular.slice(0, 6);
    // console.log(popular);
    return (
        <div className='my-14'>
            <BannerTitle mainText='Our Popular Classes' smallText='select your passion'></BannerTitle>
            <div className='md:grid md:grid-cols-3 md:gap-10'>
            {
                ourPopularClass.map(item => <PopularCard key={item._id} item={item}></PopularCard> )
            }
            </div>
        </div>
    );
};

export default PopularClasses;