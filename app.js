import React from "react";
import ReactDOM from "react-dom/client";

const Container = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};
export default Container;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
