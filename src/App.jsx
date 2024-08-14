import React from "react";
import Sidebar from "./components/Sidebar";
import HomeDashboard from "./components/HomeDashboard";

const App = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <HomeDashboard />
    </div>
  );
};

export default App;
