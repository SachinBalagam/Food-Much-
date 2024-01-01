import UseGetMenuData from "../../utils/useGetMenuData";
import Category from "../Category/Category";
import Items from "../Items/Items";

const Menu = () => {
  const menuData = UseGetMenuData();

  if (!menuData) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Category menuData={menuData.tableMenuList} />

      {menuData.tableMenuList.map((each) => (
        <Items data={each} key={each.menuCategoryId} />
      ))}
    </div>
  );
};

export default Menu;
