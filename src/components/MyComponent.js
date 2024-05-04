import React from "react";

const MyComponent = () => {
  return (
    <div class="max-w-sm mx-auto bg-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        {/* <img class = "block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"src="https://res.cloudinary.com/drrzwqvfh/image/upload/v1590779925/profile-pic-7b90c94f567c1a6c63b5873983d557e4_tact1l.jpg" alt="jeff"> */}
        <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p class="text-xl leading-tight text-white-100"> Jeff Ubayi</p>
          <p class="text-sm leading-tight text-gray-700"> Software Developer</p>
          <div class="mt-4">
            <button class="text-blue-600 hover:text-white hover:bg-blue-300 border border-blue-400 text-xs font-semibold rounded-full px-4 py-1 -normal">
              {" "}
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
