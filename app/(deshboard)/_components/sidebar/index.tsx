import React from "react";
import NewButton from "../NewButton";
import OrganizationList from "../List";
import ToolTipHint from "@/components/ToolTipHint";

const Sidebar = () => {
  return (
    <aside className="bg-slate-800 fixed h-screen w-[60px] gap-y-3 z-[1] flex flex-col p-3">
      <OrganizationList />
        <NewButton />
    </aside>
  );
};

export default Sidebar;
