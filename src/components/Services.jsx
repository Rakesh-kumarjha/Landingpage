import React from "react";
import img from "../Image/01.jpg";
function Services() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row w-full bg-white dark:bg-gray-800 shadow rounded">
        <div className="w-full lg:w-1/2">
          <div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
            <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
              <h4 className=" text-3xl text-indigo-700 dark:text-indigo-600 tracking-normal leading-4">
              WHO WE ARE
              </h4>
              <h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">
              What do we do?
              </h4>
            </div>
            <h2 className="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">
            Revealing Our Essence: Bangalore's Digital Miracle
            </h2>
            <p className="mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">
            Building trusting relationships with our clients and their target audience is a priority for Ace Web Solutions because it is crucial for the success of Website Development & Digital Marketing. We are aware that the online environment is continuously changing and that companies of all sizes must take advantage of Website Development & Digital Marketing. And our goal is to maintain industry leadership so that our clients can always be on the cutting edge.
            </p>
           
          </div>
          
        </div>
        <div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
          <img
            className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
            src={img}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
}
export default Services;
