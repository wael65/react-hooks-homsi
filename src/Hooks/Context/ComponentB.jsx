import React from "react";
import ComponentC from "./ComponentC";
import ComponentCAPI from "./ComponentCAPI";

const ComponentB = () => {
  return (
    <div>
      <ComponentC />
      <ComponentCAPI />
    </div>
  );
};

export default ComponentB;
