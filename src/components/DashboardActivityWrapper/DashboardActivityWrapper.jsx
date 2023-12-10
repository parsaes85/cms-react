import React from "react";
import DashboardActivityBox from "../DashboardActivityBox/DashboardActivityBox";

export default function DashboardActivityWrapper() {
  return (
    <div className="bg-white p-4 rounded-lg mt-6">
      <div className="flex justify-between mb-6 items-center">
        <h1 className="font-semibold text-lg">Activity</h1>
        <p className="text-sm bg-sky-50 text-sky-700 px-2 rounded">See more</p>
      </div>
      <div className="space-y-4">
        <DashboardActivityBox  image="/images/profile.jpg" name="Fereydon Foroughi" desc="Edit product details" time="1h 45min"/>
        <DashboardActivityBox  image="/images/profile.jpg" name="Parnia Foroughi" desc="Buy some products" time="30min"/>
      </div>
    </div>
  );
}
