import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/partials/Layout";
import Home from "./pages/Home";
import Boost from "./pages/Boost";
import Leaderboard from "./pages/Leaderboard";
import Earn from "./pages/Earn";
import Friends from "./pages/Friends";
import Missions from "./pages/Missions";
import Explore from "./pages/Explore";
import Wallet from "./pages/Wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,           // Sets Home as the default route
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "boost",
        element: <Boost />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "earn",
        element: <Earn />,
      },
      {
        path: "missions",
        element: <Missions />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
    ],
  },
]);

export default router;
