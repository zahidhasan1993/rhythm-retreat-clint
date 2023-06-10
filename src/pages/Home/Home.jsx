import React from 'react';
import bg from '../../assets/Images/SVG/Animated Shape.svg'
import useChangeTitle from '../../Hooks/useChangeTitle';
const Home = () => {
    useChangeTitle('Home | Rhythm Retreate')
    return (
        <div className='text-red-600'>
            <img src={bg} alt="" className='w-full'/>
        </div>
    );
};

export default Home;