import Header from "./Header";
import Card from "./Card";
import CardRight from "./CardRight";
import ChartBar from "./ChartBar";
import { FaAngleDown } from "react-icons/fa6";

const HomeDashboard = () => {
  return (
    <main className="w-4/5 ">
      <Header />
      <div className="flex gap-4">
        {/* left side */}
        <div className="w-2/5 space-y-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* right side */}
        <div className="w-3/5 space-y-4">
          <div className="flex gap-4">
            <CardRight />
            <CardRight />
          </div>
          {/* chart */}
          <div className="border rounded-2xl bg-gray-100 p-4">
            <div className="flex justify-between items-center mb-6">
              <h5 className="text-2xl font-semibold">Course Activity</h5>
              <ul className="flex text-sm font-semibold gap-4">
                <li>Video</li>
                <li>Practice</li>
              </ul>
              <div>
                <details className="dropdown ">
                  <summary className="btn bg-white m-1 rounded-full ">
                    Monthly <FaAngleDown className="text-xl" />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
            <ChartBar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDashboard;
