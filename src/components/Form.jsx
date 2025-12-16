import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    todoInvetario: "pendiente",
    todoData: "",
    todoWeight: "",
    todoSize: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todo);
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Insert name"
          name="todoNombre"
          value={todo.todoNombre}
          onChange={(e) => setTodo({ ...todo, todoNombre: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type=""
          placeholder="Insert Cost"
          name="todoCost"
          value={todo.todoCost}
          onChange={(e) => setTodo({ ...todo, todoNombre: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type="date"
          placeholder="Insert Num Inventory"
          name="todoData"
          value={todo.todoData}
          onChange={(e) => setTodo({ ...todo, todoData: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Insert size"
          name="todoSize"
          value={todo.todoDescripcion}
          onChange={(e) =>
            setTodo({ ...todo, todoDescripcion: e.target.value })
          }
        />

        <button className="btn btn-primary" type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Form;
