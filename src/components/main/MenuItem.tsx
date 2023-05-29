import { useState } from "react";
import { IMenu } from "@src/interfaces";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { likedMenuAtom } from "@src/state";

const MenuItem = ({ menu }: { menu: IMenu }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [_, setlikedMenu] = useRecoilState(likedMenuAtom);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setlikedMenu((prev) => {
      if (isLiked) {
        return prev.filter((item) => item.name !== menu.name);
      } else {
        return [...prev, menu];
      }
    });
  };

  return (
    <div key={menu.name} className="bg-white rounded-lg shadow p-4 flex">
      <div className="w-20 h-20 mr-4">
        <div
          className="rounded-lg overflow-hidden"
          style={{ width: "80px", height: "80px" }}
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
              src={menu.image}
              alt={menu.name}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-lg mb-2">{menu.name}</div>
        <div className="text-gray-600">{menu.shortDesc}</div>
      </div>
      <div className="ml-auto">
        <button className="text-red-500" onClick={handleLike}>
          <FaHeart size={24} fill={isLiked ? "red" : "grey"} />
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
