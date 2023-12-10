import React from "react";
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

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const data = [
  {
    name: "S",
    uv: 30,
    pv: 20,
  },
  {
    name: "M",
    uv: 10,
    pv: 25,
  },
  {
    name: "T",
    uv: 20,
    pv: 30,
  },
  {
    name: "W",
    uv: 20,
    pv: 15,
  },
  {
    name: "T",
    uv: 20,
    pv: 10,
  },
  {
    name: "F",
    uv: 10,
    pv: 30,
  },
  {
    name: "S",
    uv: 30,
    pv: 20,
  },
];

export default function ProfitBarChart() {
  return (
    <div className="w-full h-[280px] bg-white rounded-lg p-4">
      <div className="flex justify-between mb-6">
        <div className="font-semibold text-gray-800">
          <h2>Profit this day</h2>
          <h1 className="text-3xl">$13.209</h1>
        </div>
        <div className="text-primary">
          <MoreHorizIcon className="cursor-pointer" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="70%" className="text-sm">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 5,
          }}
          barSize={6}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis unit="K"/>
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="rgb(37 99 235)"
          />
          <Bar
            dataKey="uv"
            fill="rgb(140 219 250)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
