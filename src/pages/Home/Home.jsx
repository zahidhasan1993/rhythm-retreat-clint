import React from 'react';
import useChangeTitle from '../../Hooks/useChangeTitle';
import Banner from './Banner';
const Home = () => {
    useChangeTitle('Home | Rhythm Retreate');
    return (
        <div className='text-red-600'>
            <Banner></Banner>
        </div>
    );
};

export default Home;