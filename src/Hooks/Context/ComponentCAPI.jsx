import { userContext } from "./ComponentA";

const ComponentCAPI = () => {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return <h2>{user} --- From ComponentCAPI useing Context API</h2>;
        }}
      </userContext.Consumer>
    </div>
  );
};

export default ComponentCAPI;
