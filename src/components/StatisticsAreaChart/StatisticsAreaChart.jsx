import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 75,
  },
  {
    name: "Feb",
    uv: 40,
  },
  {
    name: "Mar",
    uv: 90,
  },
  {
    name: "Apr",
    uv: 20,
  },
  {
    name: "May",
    uv: 60,
  },
  {
    name: "Jun",
    uv: 50,
  },
  {
    name: "Jul",
    uv: 80,
  },
];

export default function StatisticsAreaChart() {
  return (
    <div className="w-full h-72 bg-white mt-6 rounded-lg p-4">
      <div className="flex justify-between mb-6 items-center">
        <h1 className="font-semibold text-lg">Statictic</h1>
        <p className="text-sm bg-sky-50 text-sky-700 px-2 rounded">Month</p>
      </div>
      <ResponsiveContainer width="100%" height="80%" className="text-sm">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 0, left: -6, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(37 99 235)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis unit="K"/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="rgb(37 99 235)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
