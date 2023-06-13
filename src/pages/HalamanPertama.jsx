import { useState } from "react";
import useMutasi from "../hooks/useMutasi";

const HalamanPertama = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { loading, kembalian, dispatcher } = useMutasi();

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    dispatcher("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todoTitle,
        completed: false,
      }),
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Form Create</h1>

      {JSON.stringify(kembalian)}

      <form onSubmit={formOnSubmitHandler}>
        <input
          type="text"
          placeholder="Todos"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default HalamanPertama;
