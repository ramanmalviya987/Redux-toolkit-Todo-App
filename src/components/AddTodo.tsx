import { useDispatch } from "react-redux";
import { AddTodoStyle } from "../styles/AddTodoStyle";
import { useState } from "react";
import { addTodo } from "../feature/todosSlice";
import { AppDispatch } from "../store/store";
const AddTodo = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.length > 0) {
      dispatch(
        addTodo({
          text: text,
          completed: false,
        })
      );
      setText("");
    } else {
      return alert("please enter something");
    }
  };
  return (
    <AddTodoStyle>
      <form onSubmit={addTodos}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Todo...."
        />
        <button type="submit">Add</button>
      </form>
    </AddTodoStyle>
  );
};

export default AddTodo;
