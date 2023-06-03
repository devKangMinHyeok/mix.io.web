import RouterLayout from "@components/Layouts/RouterLayout";
import {SetGlassSizeProps} from "@src/interfaces";
import {useRouter} from "next/router";
import React, {ChangeEvent, useEffect, useState} from "react";

const SetGlassSize = ({radius, setRadius}: SetGlassSizeProps) => {
  const router = useRouter();

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRadius(value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 relative w-72 h-72">
        <div
          className="z-0 fixed top-1/2 left-1/2 border-2 border-black text-center flex items-center justify-center"
          style={{
            transform: "translate(-50%, -50%)",
            width: `${radius}px`,
            height: `${radius}px`,
            borderRadius: router.query.type === "CYLINDER" ? "50%" : "0%",
            fontWeight: 300,
            fontSize: "48px",
            lineHeight: "55px",
          }}
        >
          Glass Size
        </div>
      </div>
      <input
        className="z-1 fixed"
        type="range"
        min="300"
        max="600"
        value={radius || ""}
        onChange={handleSliderChange}
        style={{
          width: "300px",
          bottom: "60px",
        }}
      />
    </div>
  );
};

export default SetGlassSize;
