import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default UserLayout;
