"use client";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import React from "react";
import OrganizationItemsImages from "./Items";

const OrganizationList = () => {
  const { setActive, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  // if(!organization) return null
  console.log(userMemberships);

  if (!userMemberships.data?.length) return null;

  return (
    <ul>
      {userMemberships.data?.map((organization) => (
        <OrganizationItemsImages
          key={organization.organization.id}
          name={organization.organization.name}
          id={organization.organization.id}
          src={organization.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default OrganizationList;
