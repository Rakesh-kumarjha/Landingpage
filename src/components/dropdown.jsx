import React from "react";
import New from "../Image/03.jpg";

export default function Destinations() {
  return (
    <>
      <div
        className="py-20 xl:px-0 px-4 xl:mx-auto xl:container bg-gray-50"
        /* Avoid setting fixed height
        style={{ height: 1000 }}
        */
      >
        <div className="md:flex items-center justify-between w-full bg-gray-50">
          <div className="xl:w-1/2 md:w-1/2 w-full p-6 xl:m-10">
            <h1
              role="heading"
              className="focus:outline-none md:w-60 font-bold md:text-4xl text-4xl leading-tight text-gray-800"
            >
              About Us <br />
              <span className="font-normal italic md:text-xl text-xl">
                {" "}
                Revolutionizing Website Development & Digital Marketing Agency{" "}
              </span>
            </h1>
            <p
              role="contentinfo"
              className="focus:outline-none text-base leading-6 mt-8 text-gray-600 xl:pr-24 xl:pr-0 pr-12"
            >
              One of the Website Development & Digital Marketing Agency In
              Banglore is a group of committed experts in the field of Digital
              Marketing with years of experience.
            </p>
            <div className="mt-10">
              <button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-white bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                Discover more
                <svg
                  className="ml-8"
                  width={45}
                  height={40}
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Path data */}
                </svg>
              </button>
            </div>
          </div>
          <div className=" w-full xl:pl-48">
            <p
              role="contentinfo"
              className="focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10"
            >
              <span className="font-normal italic focus:outline-none md:w-60 font-bold md:text-4xl text-4xl leading-tight text-gray-800">
                Revealing Our Essence: Bangalore's Digital Miracle
              </span>
            </p>
            <div className="w-full">
              <img
                src={New}
                alt="Purple flowers on a book"
                className="md:w-full sm:w-1/2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
