import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4,
    pv: 2,
    amt: 8,
  },
  {
    name: "Feb",
    uv: 3,
    pv: 6,
    amt: 8,
  },
  {
    name: "Mar",
    uv: 6,
    pv: 2,
    amt: 8,
  },
  {
    name: "Apr",
    uv: 7,
    pv: 6,
    amt: 8,
  },
  {
    name: "May",
    uv: 2,
    pv: 7,
    amt: 8,
  },
  {
    name: "Jun",
    uv: 3,
    pv: 8,
    amt: 8,
  },
  {
    name: "Jul",
    uv: 6,
    pv: 4,
    amt: 8,
  },
  {
    name: "Aug",
    uv: 3,
    pv: 7,
    amt: 8,
  },
  {
    name: "Sep",
    uv: 7,
    pv: 7,
    amt: 8,
  },
  {
    name: "Oct",
    uv: 3,
    pv: 3,
    amt: 8,
  },
  {
    name: "Nov",
    uv: 3,
    pv: 6,
    amt: 8,
  },
  {
    name: "Dec",
    uv: 5,
    pv: 2,
    amt: 8,
  },
];

const ChartBar = () => {
  return (
    <div className="h-80 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: -40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#130f40"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
