import { memo } from "react";

const Todos036 = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <p>My Todos036</p>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos036);