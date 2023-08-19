import React from "react";
import { Outlet } from "react-router";

const NormalLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default NormalLayout;
