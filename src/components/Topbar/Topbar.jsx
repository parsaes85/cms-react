import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import AuthContext from "../../contexts/authContext";

import "./Topbar.css";

export default function Topbar() {
  const { adminInfos } = useContext(AuthContext);
  const location = useLocation();

  const topbarTitle = location.pathname.split("/")[1];

  return (
    <header>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <h1 className="font-semibold text-xl xs:text-2xl capitalize ml-7 xs:ml-0">
            {topbarTitle}
          </h1>

          <div className="flex gap-1 xs:gap-3 items-center text-[9px] xs:text-[11px] font-semibold bg-white px-3 rounded-md">
            01.08.2023 - 30.08.2023
            <DateRangeOutlinedIcon
              fontSize="small"
              className="topbar-calender-icon"
            />
          </div>
        </div>

        <div className="mt-2 xs:mt-0">
          <div className="flex gap-1 xs:gap-2 items-center">
            <img
              src="/images/profile.jpg"
              alt=""
              className="w-6 rounded-full"
            />
            <p className="font-semibold text-[10px] xs:text-xs">
              {adminInfos?.name}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
