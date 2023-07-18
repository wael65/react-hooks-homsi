import { useContext } from "react";
import { userContext, lastContext } from "./ComponentA";

const ComponentC = () => {
  const user = useContext(userContext);
  const last = useContext(lastContext);
  return (
    <div>
      <h2>
        {user} {last}--- From ComponentC useing useContext{" "}
      </h2>
      ;
    </div>
  );
};

export default ComponentC;
