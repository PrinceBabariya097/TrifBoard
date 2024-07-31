import ToolTipHint from "@/components/ToolTipHint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  id: string;
  name: string;
}
const OrganizationItemsImages = ({ src, id, name }: Props) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };
  return (
    <div className="aspect-square">
      <ToolTipHint title={name} side="right" sideOffset={18} align="start">
        <Image
          src={src}
          alt={name}
          width={100}
          height={100}
          className={cn(
            "rounded-lg object-cover opacity-70 h-full w-full ",
            isActive && " opacity-100"
          )}
          onClick={onClick}
        />
      </ToolTipHint>
    </div>
  );
};

export default OrganizationItemsImages;
