import "./index.css";

const Items = (props) => {
  const { data } = props;
  console.log(data);

  if (!data) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="items-container">
      <h1>Items</h1>
      {data.category_dishes.map((each) => (
        <div className="item-card" key={each.dish_id}>
          <div className="item-details">
            <h3 className="dish-name">{each.dish_name}</h3>
            <p className="dish-price">Rs. {each.dish_price * 10}</p>
            <p className="dish-description">{each.dish_description}</p>
            {!each.dish_Availability && (
              <p className="not-available">Not available</p>
            )}
            {each.dish_Availability && (
              <div className="buttons-contianer">
                <button className="decrease">-</button>
                <p className="count">0</p>
                <button className="increase">+</button>
              </div>
            )}
          </div>

          <p className="calories">{each.dish_calories} Calories</p>
          <img src={each.dish_image} alt="Dish Image" className="dish-image" />
        </div>
      ))}
    </div>
  );
};

export default Items;
