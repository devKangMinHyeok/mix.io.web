import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import GlassItemView from "./GlassItemView";

const SetGlassType = () => {
  return (
    <div>
      <Link
        href={{
          pathname: "/glass/size",
          query: {type: "CYLINDER"},
        }}
        as={{pathname: "/glass/new", query: {type: "CYLINDER"}}}
      >
        <GlassItemView type={"CYLINDER"} name={"Cylinder"} />
      </Link>
      <Link
        href={{
          pathname: "/glass/size",
          query: {type: "SQUARE"},
        }}
        as={{pathname: "/glass/new", query: {type: "SQUARE"}}}
      >
        <GlassItemView type={"SQUARE"} name={"Square Prism"} />
      </Link>
    </div>
  );
};

export default SetGlassType;
