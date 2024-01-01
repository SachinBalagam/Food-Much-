import { whyChooseUsData } from "../../utils/Data";
import "./index.css";

const Body = () => {
  return (
    <div className="body-container">
      <div className="top-section-container">
        <h1 className="title">Get Delicious Food Anytime</h1>
        <h3 className="sub-title">Eat smart and healthy</h3>
        <div className="buttons-container">
          <button className="menu-button">View Menu</button>
          <button className="order-button">Order Now</button>
        </div>
      </div>
      <div className="top-container">
        <div className="why-choose-us-container">
          <h1>Why Choose us ? </h1>
          <p>
            We use both original recipes and classic versions of famous food
            items.
          </p>
          <ul className="why-choose-us-list">
            {whyChooseUsData.map((each) => (
              <li key={each.id} className="why-choose-each-card">
                <img src={each.image} alt={each.title} />
                <h3 className="wcu-card-title">{each.title}</h3>
                <p className="wcu-card-description">{each.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
