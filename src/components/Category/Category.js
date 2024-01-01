import "./index.css";

const Category = (props) => {
  const { menuData } = props;

  //   console.log(menuData);
  return (
    <div>
      <ul className="category-list">
        {menuData.map((each) => (
          <li key={each.menuCategoryId} className="category">
            {each.menuCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
