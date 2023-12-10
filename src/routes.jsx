import DashboardContainer from "./components/DashboardContainer/DashboardContainer";
import DashboardPrivate from "./components/Privates/DashboardPrivate";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";

const routes = [
  { path: "/", element: <Login /> },
  {
    path: "/*",
    element: (
      <DashboardPrivate>
        <DashboardContainer />
      </DashboardPrivate>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <Products />,
      }
    ],
  },
];

export default routes;
