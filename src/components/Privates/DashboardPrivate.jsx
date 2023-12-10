import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function DashboardPrivate({ children }) {
  const { adminInfos } = useContext(AuthContext);
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      {localStorageToken ? (
        <>{children}</>
      ) : (
        Navigate({"to": "/"})
      )}
    </>
  );
}
