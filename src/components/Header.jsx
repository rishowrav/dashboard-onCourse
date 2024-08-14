import { FaBars, FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-6 my-8">
      {/* drawer  */}
      <div className="drawer z-50 lg:hidden block">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn drawer-button ">
            <FaBars className="text-2xl " />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 font-semibold  text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>My Course</a>
            </li>
            <li>
              <a>Completed</a>
            </li>
            <li>
              <a>Financial Aid</a>
            </li>
            <li>
              <a>Transactions</a>
            </li>
            <li>
              <a>Reports</a>
            </li>
            <li>
              <a>Status</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
          </ul>
        </div>
      </div>
      {/* drawer end */}

      <div className="text-3xl font-semibold">Overview</div>

      <div>
        <ul className="flex gap-4">
          <li className="hidden md:block">
            <label className="input lg:w-[500px] input-bordered rounded-full flex items-center gap-4">
              <IoSearch className="text-xl text-gray-500 " />
              <input type="text" className="grow" placeholder="Search ..." />
            </label>
          </li>
          <li>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
              <FaRegBell className="text-xl" />
            </div>
          </li>
          <li className="flex items-center gap-2">
            <figure>
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="avatar.jpg"
                alt="avatar"
              />
            </figure>
            <div className="hidden md:block">
              <h6 className="font-semibold">Rahimul Islam</h6>
              <p className="text-sm text-gray-400">Student</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
