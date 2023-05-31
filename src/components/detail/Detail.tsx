import {IMenu} from "@src/interfaces";
import Image from "next/image";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

const Detail = ({info}: {info: IMenu}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">{info.name}</h2>
      <div
        className="rounded-lg overflow-hidden"
        style={{width: "180px", height: "180px"}}
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
            src={info.image}
            alt={info.name}
            fill
            style={{objectFit: "cover", objectPosition: "center"}}
          />
        </div>
      </div>
      <p>{info.longDesc}</p>
      <div className="flex items-center justify-end mt-4">
        <Link href="/glass/selection">
          <div className="flex items-center text-blue-500">
            <span className="mr-2">Mix!</span>
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
