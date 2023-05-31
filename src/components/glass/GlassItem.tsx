import {IGlass} from "@src/interfaces";
import Image from "next/image";
import Link from "next/link";
import cylinder from "@public/resources/icons/Cylinder.png";
import square from "@public/resources/icons/Square.png";
import GlassItemView from "./GlassItemView";

const GlassItem = ({glass}: {glass: IGlass}) => {
  return (
    <Link href={`/glass/${glass.id}`} key={glass.name}>
      <GlassItemView type={glass.type} name={glass.name} />
    </Link>
  );
};

export default GlassItem;
