import {imageMapping} from "@src/utils";
import Image from "next/image";

const GlassItemView = ({type, name}: {type: string; name: string}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex">
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
              src={imageMapping[type]}
              alt={name}
              fill
              style={{objectFit: "cover", objectPosition: "center"}}
            />
          </div>
        </div>
      </div>
      <div className="font-bold text-lg mb-2">{name}</div>
    </div>
  );
};

export default GlassItemView;
