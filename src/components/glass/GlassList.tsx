import {IGlass} from "@src/interfaces";
import Link from "next/link";
import GlassItem from "./GlassItem";
import GlassItemView from "./GlassItemView";

const GlassList = ({glassInfo}: {glassInfo: IGlass[]}) => {
  return (
    <div>
      {glassInfo.map((glass) => {
        return <GlassItem glass={glass} key={glass.name} />;
      })}
      <Link href={`/glass/type`} as={`/glass/new`}>
        <GlassItemView type={"EMPTY"} name={"NEW +"} />
      </Link>
    </div>
  );
};

export default GlassList;
