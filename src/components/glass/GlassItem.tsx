import {IGlass} from "@src/interfaces";
import Image from "next/image";
import Link from "next/link";
import cylinder from "@public/resources/icons/Cylinder.png";
import square from "@public/resources/icons/Square.png";
import GlassItemView from "./GlassItemView";

const GlassItem = ({glass}: {glass: IGlass}) => {
  return (
    <Link
      href={{
        pathname: "/making",
        query: {type: glass.type, size: glass.size, y: glass.y, h: glass.h},
      }}
    >
      <GlassItemView type={glass.type} name={glass.name} />
    </Link>
  );
};

export default GlassItem;
