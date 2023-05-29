import { IMenu } from "@src/interfaces";
import MenuItem from "./MenuItem";

const MenuList = ({ menuInfo }: { menuInfo: IMenu[] }) => {
  return (
    <div>
      {menuInfo.map((menu) => {
        return <MenuItem menu={menu} key={menu.name} />;
      })}
    </div>
  );
};

export default MenuList;
