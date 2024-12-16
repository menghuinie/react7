import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <p>My Todos</p>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);