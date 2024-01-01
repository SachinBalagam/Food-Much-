import { useEffect, useState } from "react";

const UseGetMenuData = () => {
  const [menuData, setMenuData] = useState();

  const GetMenuData = async () => {
    const data = await fetch(
      "https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc"
    );
    const jsonData = await data.json();

    const caseConverteedData = [
      {
        branchName: jsonData[0].branch_name,
        nexturl: jsonData[0].nexturl,
        restaurantId: jsonData[0].restaurant_id,
        restaurantImage: jsonData[0].restaurant_image,
        restaurantName: jsonData[0].restaurant_name,
        tableId: jsonData[0].table_id,
        tableName: jsonData[0].table_name,
        tableMenuList: jsonData[0].table_menu_list.map((each) => {
          return {
            category_dishes: each.category_dishes,
            menuCategory: each.menu_category,
            menuCategoryId: each.menu_category_id,
            menuCategoryImage: each.menu_category_image,
            nexturl: each.nexturl,
          };
        }),
      },
    ];
    // console.log(caseConverteedData);

    setMenuData(caseConverteedData[0]);
  };

  useEffect(() => {
    GetMenuData();
  }, []);

  return menuData;
};

export default UseGetMenuData;
