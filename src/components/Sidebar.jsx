import React from "react";
import { IoBookOutline, IoGrid } from "react-icons/io5";
import { FaChartBar, FaDollarSign, FaRedhat } from "react-icons/fa6";
import { BsBarChartLineFill, BsBox } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="w-1/5 h-screen border lg:block hidden">
      <div>
        {/* <img className="w-32 mx-auto my-8" src="logo.webp" alt="" /> */}
        <h4 className="text-4xl font-bold my-8 text-center">
          <span className="text-blue-500">ON</span>Course
        </h4>
      </div>
      <nav className="ml-8 flex flex-col gap-32">
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <IoGrid className="text-xl" />{" "}
            <span className="text-lg font-semibold">Overview</span>
          </li>
          <li className="flex items-center gap-3">
            <IoBookOutline className="text-xl" />{" "}
            <span className="text-lg font-semibold">My Course</span>
          </li>
          <li className="flex items-center gap-3">
            <FaRedhat className="text-xl" />{" "}
            <span className="text-lg font-semibold">Completed</span>
          </li>
          <li className="flex items-center gap-3">
            <BsBox className="text-xl" />{" "}
            <span className="text-lg font-semibold">Financial Aid</span>
          </li>
          <li className="flex items-center gap-3">
            <FaDollarSign className="text-xl" />{" "}
            <span className="text-lg font-semibold">Transactions</span>
          </li>
          <li className="flex items-center gap-3">
            <BsBarChartLineFill className="text-xl" />{" "}
            <span className="text-lg font-semibold">Reports</span>
          </li>
          <li className="flex items-center gap-3">
            <FaChartBar className="text-xl" />{" "}
            <span className="text-lg font-semibold">Statistics</span>
          </li>
        </ul>

        <ul className="space-y-4 ">
          <li className="flex items-center gap-3">
            <FiLogOut className="text-xl" />{" "}
            <span className="text-lg font-semibold">Support</span>
          </li>
          <li className="flex items-center gap-3">
            <IoMdSettings className="text-xl" />{" "}
            <span className="text-lg font-semibold">Setting</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
