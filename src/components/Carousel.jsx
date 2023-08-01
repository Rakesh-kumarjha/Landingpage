import React, { useState, useEffect } from "react";

const CAROUSEL_DATA = [
  {
    url: "https://acewebsolution.com/img/1.png",
  },
  {
    url: "https://acewebsolution.com/img/4.png",
  },
  // {
  //   url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  // },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % CAROUSEL_DATA.length);
  };

  const decrementIndex = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(incrementIndex, 5000); // Set the interval for automatic scrolling (5000ms = 5 seconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const carouselStyles = {
    backgroundImage: `url(${CAROUSEL_DATA[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <section className="relative">
      <div style={carouselStyles} className="rounded-md"></div>
      <div
      onClick={incrementIndex}
      className="absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer"
    >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div
        onClick={incrementIndex}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      {/* Display for Big Screens */}
      <div className="hidden xl:block absolute top-0 left-0 xl:left-20 xl:top-24 w-full xl:w-1/2 md:p-4 p-4 text-center xl:mt-8">
      <h2 className="text-white text-4xl font-medium mb-4">
        It's time to give your Website a Makeover with Ace Web Solution
      </h2>
    </div>
    <div className="hidden xl:block absolute top-0 right-0 xl:right-20 xl:top-24 w-full xl:w-2/4 bg-blue-800 p-4 text-center">
      <h1 className="text-white text-3xl font-semibold mb-2">Contact us</h1>
      <h2 className="text-white text-xl font-medium mb-4"></h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Display for Small Screens */}
      <div className="xl:hidden absolute top-0 left-0 w-full md:p-4 p-4 text-center">
        <h1 className="text-white text-3xl font-semibold mb-2">Contact us</h1>
        <h2 className="text-white text-xl font-medium mb-4"></h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="xl:hidden absolute bottom-0 left-0 w-full md:p-4 p-4 text-center">
        <h2 className="text-white text-4xl font-medium mb-4">
          It's time to give your Website a Makeover with Ace Web Solution
        </h2>
      </div>
    </section>
  );
};

export default Carousel;
