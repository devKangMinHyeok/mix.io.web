import { sampleMenus } from "@src/constants";
import MenuList from "./MenuList";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { likedMenuAtom } from "@src/state";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("menu");
  const likedMenus = useRecoilValue(likedMenuAtom);
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex">
        <button
          className={`flex-grow ${
            activeTab === "menu"
              ? "text-black-500 border-b-2 border-black"
              : "text-gray-500 opacity-50"
          } text-lg font-bold px-4 py-2`}
          onClick={() => handleTabChange("menu")}
        >
          Menu
        </button>
        <button
          className={`flex-grow ${
            activeTab === "favorite"
              ? "text-black-500 border-b-2 border-black"
              : "text-gray-500 opacity-50"
          } text-lg font-bold px-4 py-2`}
          onClick={() => handleTabChange("favorite")}
        >
          Favorite
        </button>
      </nav>

      {activeTab === "menu" ? (
        <MenuList menuInfo={sampleMenus} />
      ) : (
        <MenuList menuInfo={likedMenus} />
      )}
    </div>
  );
};

export default Homepage;
