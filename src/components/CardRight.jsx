import React from "react";
import { FaRedhat } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const CardRight = () => {
  return (
    <div className="border rounded-2xl w-full p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-6xl">04</h2>
        <div className="w-14 h-14 border rounded-full flex items-center justify-center">
          <FaRedhat className="text-3xl" />
        </div>
      </div>
      <div className="flex justify-between ">
        <p className="font-semibold">
          Completed <br /> Course
        </p>
        <p className="flex gap-2 items-center font-semibold">
          20% Increase <FaArrowTrendUp />
        </p>
      </div>
    </div>
  );
};

export default CardRight;
