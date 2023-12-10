import React from 'react'

import DashboardInfoBox from '../DashboardInfoBox/DashboardInfoBox'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupIcon from '@mui/icons-material/Group';

export default function DashboardInfoWrapper() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
        <DashboardInfoBox icon={<RemoveRedEyeIcon />} value="3.456K" desc="Total Views"/>
        <DashboardInfoBox icon={<ShoppingCartIcon />} value="$45,2K" desc="Total Profit"/>
        <DashboardInfoBox icon={<ShoppingBagIcon />} value="2.450" desc="Total Product"/>
        <DashboardInfoBox icon={<GroupIcon />} value="3.456" desc="Total Users"/>
    </div>
  )
}