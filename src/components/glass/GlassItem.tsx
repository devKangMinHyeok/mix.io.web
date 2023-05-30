import {IGlass} from "@src/interfaces";
import Image from "next/image";
import Link from "next/link";
import cylinder from "@public/resources/icons/Cylinder.png";
import square from "@public/resources/icons/Square.png";

const GlassItem = ({glass}: {glass: IGlass}) => {
  return (
    <Link
      href={`/glass/${glass.id}`}
      key={glass.name}
      className="bg-white rounded-lg shadow p-4 flex"
    >
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
              src={glass.type === "Cylinder" ? cylinder : square}
              alt={glass.name}
              fill
              style={{objectFit: "cover", objectPosition: "center"}}
            />
          </div>
        </div>
      </div>
      <div className="font-bold text-lg mb-2">{glass.name}</div>
    </Link>
  );
};

export default GlassItem;
