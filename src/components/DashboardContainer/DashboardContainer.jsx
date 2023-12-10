import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardContainer() {
  return (
    <div className="flex min-h-[100vh]">
      <Sidebar />

      <div className="flex-[4] bg-primary px-8 md:px-12 py-6">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
