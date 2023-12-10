import React from "react";

export default function DashboardActivityBox({image, name, desc, time}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <img
          src={image}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="text-gray-800 text-sm font-bold">{name}</h1>
          <p className="text-[11px] text-primary">{desc}</p>
        </div>
      </div>
      <span className="text-primary text-[10px] bg-gray-50">{time}</span>
    </div>
  );
}
