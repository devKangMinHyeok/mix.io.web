import {IGlass} from "@src/interfaces";
import Image from "next/image";
import Link from "next/link";
import GlassItem from "./GlassItem";
import empty from "@public/resources/icons/empty.png";

const GlassList = ({glassInfo}: {glassInfo: IGlass[]}) => {
  return (
    <div>
      {glassInfo.map((glass) => {
        return <GlassItem glass={glass} key={glass.name} />;
      })}
      <Link href={`/glass/new`} className="bg-white rounded-lg shadow p-4 flex">
        <div className="w-20 h-20 mr-4">
          <div
            className="rounded-lg overflow-hidden"
            style={{width: "40px", height: "40px"}}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            >
              <Image
                src={empty}
                alt={"new glass"}
                fill
                style={{objectFit: "cover", objectPosition: "center"}}
              />
            </div>
          </div>
        </div>
        <div className="font-bold text-lg mb-2">New +</div>
      </Link>
    </div>
  );
};

export default GlassList;
