import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { AppStyle } from "./styles/AppStyle";
import type { RootState } from "./store/store";
import { useEffect, useState } from "react";
import { addTodos } from "./feature/todosSlice";

function App() {
  const todos = useSelector((state: RootState) => state.todos.todo);
  const dispatch = useDispatch();

  const copyArray = [...todos].reverse();

  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const handleEditClick = (id: string) => {
    setEditingTodoId(id);
  };

  const handleSaveClick = () => {
    setEditingTodoId(null);
  };
  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      const todoData = JSON.parse(data);
      // console.log(Array(todoData), todoData.length);
      if (Array.isArray(todoData) && todoData.length > 0) {
        dispatch(addTodos(todoData));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <AppStyle>
      <h1>To Do App...</h1>
      <div className="container">
        <AddTodo />
        <div className="todos">
          {copyArray.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              isedit={editingTodoId === todo.id}
              onEditClick={() => handleEditClick(todo.id)}
              onSaveClick={handleSaveClick}
            />
          ))}
        </div>
      </div>
    </AppStyle>
  );
}

export default App;
