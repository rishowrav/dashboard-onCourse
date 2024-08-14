import React from "react";

const Card = () => {
  return (
    <div className="border space-y-3 p-5 rounded-2xl">
      <h1 className="text-2xl font-semibold">
        Foundations of User Experience UX Design
      </h1>

      <div className="flex space-x-4">
        <div className="flex flex-col justify-between">
          <ul className="flex text-sm gap-3 font-medium">
            <li>4 Assignment</li>
            <li>20 Videos</li>
          </ul>
          <button className="btn  rounded-full lg:w-64">
            Countinue Course
          </button>
        </div>
        <div
          className="radial-progress"
          style={{ "--value": "80", "--size": "6rem", "--thickness": ".8rem" }}
          role="progressbar"
        >
          80%
        </div>
      </div>
    </div>
  );
};

export default Card;
