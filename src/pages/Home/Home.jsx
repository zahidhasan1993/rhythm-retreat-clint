import React from 'react';
import useChangeTitle from '../../Hooks/useChangeTitle';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
const Home = () => {
    useChangeTitle('Home | Rhythm Retreate');
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;