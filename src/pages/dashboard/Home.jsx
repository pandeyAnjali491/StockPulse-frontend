import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const Home = () => {
  // use authentication context for user and logout
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <>
      <TopBar username={user} onLogout={handleLogout} />
      <Dashboard username={user} />
      <ToastContainer />
    </>
  );
};
export default Home;
