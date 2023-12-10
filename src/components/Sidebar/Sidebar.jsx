import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CloseIcon from "@mui/icons-material/Close";

import AuthContext from "../../contexts/authContext";
import CustomModal from "../CustomModal/CustomModal";

import "./Sidebar.css";

export default function Sidebar() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const hideSidebar = (e) => {
      if (e.target.tagName === "ASIDE") {
        setIsShowSidebar(false);
      }
    };
    document.addEventListener("click", hideSidebar);

    return () => {
      document.removeEventListener("click", hideSidebar);
    };
  }, []);

  return (
    <>
      {isShowCustomModal && (
        <CustomModal
          type="delete"
          setIsShowCustomModal={setIsShowCustomModal}
          confirmHandler={logout}
        />
      )}
      <div
        className="absolute top-6 left-8 xs:hidden cursor-pointer"
        onClick={() => setIsShowSidebar(true)}
      >
        <GridViewRoundedIcon />
      </div>
      <aside
        className={`fixed xs:static xs:block bg-black bg-opacity-50 w-full xs:w-auto h-[100vh] ${
          isShowSidebar ? "left-0" : "-left-[900px]"
        } z-50 transition-all duration-200`}
      >
        <div className="pt-4 bg-white w-48 h-full">
          <div className="px-7 flex justify-between items-center">
            <h1 className="font-semibold text-xl">Business</h1>
            <span
              className="xs:hidden cursor-pointer"
              onClick={() => setIsShowSidebar(false)}
            >
              <CloseIcon />
            </span>
          </div>

          <div className="mt-8 text-primary font-semibold text-sm">
            <ul className="pl-3 pr-8">
              <li>
                <NavLink
                  to="/dashboard"
                  className="flex gap-2 hover:text-slate-900 py-2 pl-4 pr-10 rounded-full"
                >
                  <AssessmentOutlinedIcon fontSize="small" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className="flex gap-2 hover:text-slate-900  py-2 pl-4 pr-10 rounded-full"
                >
                  <PersonOutlineOutlinedIcon fontSize="small" />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="flex gap-2 hover:text-slate-900 py-2 pl-4 pr-10 rounded-full"
                >
                  <ShoppingCartOutlinedIcon fontSize="small" />
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/messages"
                  className="flex gap-2 hover:text-slate-900  py-2 pl-4 pr-10 rounded-full"
                >
                  <EmailOutlinedIcon fontSize="small" />
                  Messages
                </NavLink>
              </li>
            </ul>

            <hr className="my-3" />

            <ul className="pl-3 pr-8">
              <li>
                <Link className="flex gap-2 hover:text-slate-900  py-2 pl-4 pr-10 rounded-full">
                  <SettingsOutlinedIcon fontSize="small" />
                  Settings
                </Link>
              </li>
              <li>
                <span
                  className="flex gap-2 hover:text-slate-900  py-2 pl-4 pr-10 rounded-full cursor-pointer"
                  onClick={() => setIsShowCustomModal(true)}
                >
                  <ExitToAppOutlinedIcon fontSize="small" />
                  Sign Out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
