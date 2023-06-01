import RouterLayout from "@components/Layouts/RouterLayout";
import {useRouter} from "next/router";
import React, {ChangeEvent, useEffect, useState} from "react";

interface SetGlassSizeProps {
  radius: number | undefined;
  setRadius: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const SetGlassSize = ({radius, setRadius}: SetGlassSizeProps) => {
  const router = useRouter();

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRadius(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          position: "relative",
          width: "300px",
          height: "300px",
        }}
      >
        <div
          style={{
            zIndex: 0,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${radius}px`,
            height: `${radius}px`,
            borderRadius: "50%",
            border: "2px solid black",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Glass Size
        </div>
      </div>
      <input
        type="range"
        min="200"
        max="600"
        value={radius || ""}
        onChange={handleSliderChange}
        style={{
          width: "300px",
          zIndex: 1,
          position: "fixed",
          bottom: "60px",
        }}
      />
    </div>
  );
};

export default SetGlassSize;
