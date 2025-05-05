import React from "react";
import "./MyComponent.css";

const MyComponent = () => {
  const redtitle = true;
  return (
    <div>
      <h1>MyComponent</h1>
      <p style={{ padding: "10px", backgroundColor: "lightgray" }}>
        This is my component.
      </p>
      <h2 className={redtitle ? "red-title" : "title"}>
        Esse título vai ser dinamico
      </h2>
    </div>
  );
};

export default MyComponent;
