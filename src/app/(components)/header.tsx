"use client";

import React from "react";
import HeaderSmall from "./header/header-small";
import HeaderBreadcrumb from "./header/header-breadcrumb";

const Header: React.FC = () => {
  return (
    <div className="pl-5 h-full flex justify-start gap-4 items-center">
      <div className="lg:hidden">
        <HeaderSmall />
      </div>
      <HeaderBreadcrumb />
    </div>
  );
};

export default Header;
