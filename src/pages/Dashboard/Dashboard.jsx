import React from "react";

import DashboardInfoWrapper from "../../components/DashboardInfoWrapper/DashboardInfoWrapper";
import StatisticsAreaChart from "../../components/StatisticsAreaChart/StatisticsAreaChart";
import ProfitBarChart from "../../components/ProfitBarChart/ProfitBarChart";
import DashboardActivityWrapper from "../../components/DashboardActivityWrapper/DashboardActivityWrapper";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";

export default function Dashboard() {
  return (
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        <div className="flex-[2] lg:flex-[4]">
          <DashboardInfoWrapper />
          <StatisticsAreaChart />
        </div>
        <div className="flex-[2]">
          <ProfitBarChart />
          <DashboardActivityWrapper />
        </div>
      </div>
  );
}
