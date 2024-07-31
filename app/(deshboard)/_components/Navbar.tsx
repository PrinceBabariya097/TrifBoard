import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-5 p-5 w-full">
      <div className="text-white hidden bg-black lg:flex lg:flex-1">Search</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
