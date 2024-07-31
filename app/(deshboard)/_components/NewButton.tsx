"use client";

import ToolTipHint from "@/components/ToolTipHint";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import React from "react";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white/25 mt-5 aspect-square rounded-lg ">
          <ToolTipHint
            title="Create New Organization"
            side="right"
            sideOffset={18}
            align="start"
          >
            <button className="w-full h-full flex-center">
              <Plus className="text-white m-2" />
            </button>
          </ToolTipHint>
        </div>
      </DialogTrigger>
      <DialogContent className=" bg-transparent  flex-center  border-none max-w-[450px] p-0 ">
        <div className="-z-[1]">
          <CreateOrganization />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
