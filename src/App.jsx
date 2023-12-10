import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import routes from "./routes";
import AuthContext from "./contexts/authContext";
import DashboardPrivate from "./components/Privates/DashboardPrivate";

import "./App.css";

function App() {
  const mainUrl = "http://localhost:8000/api";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminInfos, setAdminInfos] = useState({});

  const router = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate()

  const login = useCallback((adminInfos, token) => {
    setAdminInfos(adminInfos);
    setIsLoggedIn(true);
    localStorage.setItem("token", JSON.stringify(token));
  }, []);

  const logout = useCallback(() => {
    setAdminInfos({});
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate('/')
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const localStorageToken = JSON.parse(localStorage.getItem("token"));

      if (localStorageToken) {
        const res = await fetch(`${mainUrl}/auth/me`, {
          headers: {
            "authorization": localStorageToken,
          },
        });
        const data = await res.json();

        setIsLoggedIn(true);
        setAdminInfos(data[0]);
      } else {
        setIsLoggedIn(false)
      }
    };
    fetchData();
  }, [location]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        adminInfos,
        login,
        logout
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
