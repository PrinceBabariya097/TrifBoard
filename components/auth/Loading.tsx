import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex-center">
      <Image
        src={"/trif-logo.webp"}
        alt="trif logo image"
        height={100}
        width={200}
        objectFit="cover"
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
