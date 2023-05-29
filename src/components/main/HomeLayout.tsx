import { sampleMenus } from "@src/constants";
import MenuList from "./MenuList";
import { ReactNode, useState } from "react";
import { IMenu } from "@src/interfaces";
import { useRecoilValue } from "recoil";
import { likedMenuAtom } from "@src/state";

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  const [activeTab, setActiveTab] = useState("menu"); // 현재 선택된 탭
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
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 opacity-50"
          } text-lg font-bold px-4 py-2`} // 패딩을 추가하기 위해 'px-4'와 'py-2' 클래스를 추가했습니다.
          onClick={() => handleTabChange("menu")}
        >
          Menu
        </button>
        <button
          className={`flex-grow ${
            activeTab === "favorite"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 opacity-50"
          } text-lg font-bold px-4 py-2`} // 패딩을 추가하기 위해 'px-4'와 'py-2' 클래스를 추가했습니다.
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

      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
