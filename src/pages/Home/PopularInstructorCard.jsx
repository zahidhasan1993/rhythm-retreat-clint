import React from "react";

const PopularInstructorCard = ({ instructor }) => {
  console.log(instructor);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
            alt=""
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-full"
              src={instructor.photoURL}
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {instructor.name}
          </h4>
          <p className="text-base font-normal text-gray-600">
            {instructor.email}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default PopularInstructorCard;
