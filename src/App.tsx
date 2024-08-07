import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { AppStyle } from "./styles/AppStyle";
import type { RootState } from "./store/store";

function App() {
  const todos = useSelector((state: RootState) => state.todos.todo);
  const copyArray = [...todos].reverse();

  return (
    <AppStyle>
      <h1>To Do App...</h1>
      <div className="container">
        <AddTodo />
        <div className="todos">
          {copyArray.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </AppStyle>
  );
}

export default App;
