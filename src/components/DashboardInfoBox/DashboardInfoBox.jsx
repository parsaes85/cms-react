import React from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function DashboardInfoBox({icon, value, desc}) {
  return (
    <div className="bg-white rounded-lg flex justify-between items-center p-3 transition duration-200 group hover:bg-blue-600">
      <div className="flex items-center gap-2">
        <div className="bg-sky-50 text-sky-700 rounded-xl p-3 group-hover:bg-white">
          {icon}
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-lg group-hover:text-gray-200">{value}</h1>
          <p className="text-primary text-sm group-hover:text-gray-300">{desc}</p>
        </div>
      </div>
      <div className="text-sky-700 group-hover:text-gray-200">
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}
