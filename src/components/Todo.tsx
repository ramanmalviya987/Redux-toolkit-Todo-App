import { useDispatch } from "react-redux";
import { TodoStyle } from "../styles/TodoStyle";
import { completedTodo, editTodo, deleteTodo } from "../feature/todosSlice";
import { useEffect, useState } from "react";
interface TodoProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
}

const Todo = ({ todo }: TodoProps) => {
  const [newText, setNewText] = useState<string>(todo.text);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const todoComplete = () => {
    dispatch(
      completedTodo({
        id: todo.id,
        completed: !todo.completed,
      })
    );
  };

  const handleEditClick = () => {
    dispatch(
      editTodo({
        id: todo.id,
        text: newText,
      })
    );
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    if (isEdit) {
      const inputElement = document.querySelector(
        ".todo-input"
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [isEdit]);

  return (
    <TodoStyle isEdit={isEdit} completed={todo.completed}>
      <div className="todo-container">
        <div className="todo-input-contianer">
          <input
            disabled={isEdit}
            type="checkbox"
            className="checkbox"
            onChange={todoComplete}
          />
          <input
            className="todo-input"
            type="text"
            value={newText}
            readOnly={!isEdit}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
        <div className="todo-input-contianer">
          <button
            disabled={todo.completed}
            onClick={handleEditClick}
            className="edit"
          >
            {!isEdit ? "Edit" : "Save"}
          </button>
          <button
            onClick={() => {
              dispatch(deleteTodo({ id: todo.id }));
            }}
            className="delete"
          >
            Delete
          </button>
        </div>
      </div>
    </TodoStyle>
  );
};

export default Todo;
