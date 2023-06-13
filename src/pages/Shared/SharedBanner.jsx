import React from 'react';
import { Parallax } from 'react-parallax';

const SharedBanner = ({img,name,msg}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
        >
          <div
            className="hero h-[44rem]"
          >
            <div className="hero-content text-center bg-black w-[75%] h-[28rem] bg-opacity-60 text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">{name}</h1>
                <p className="mb-5 uppercase">{msg}</p>
              </div>
            </div>
          </div>
        </Parallax>
    );
};

export default SharedBanner;