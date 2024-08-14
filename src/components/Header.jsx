import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between mx-6 my-8">
      <div className="text-3xl font-semibold">Overview</div>

      <div>
        <ul className="flex gap-4">
          <li>
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
            <div>
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
