import { useDispatch } from "react-redux";
import { TodoStyle } from "../styles/TodoStyle";
import { completedTodo, editTodo, deleteTodo } from "../feature/todosSlice";
import { useEffect, useRef, useState } from "react";
interface TodoProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  isedit: boolean;
  onEditClick: () => void;
  onSaveClick: () => void;
}

const Todo = ({ todo, isedit, onEditClick, onSaveClick }: TodoProps) => {
  const [newText, setNewText] = useState<string>(todo.text);
  // const [isedit, setIsedit] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
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
    if (isedit) {
      dispatch(
        editTodo({
          id: todo.id,
          text: newText,
        })
      );
      onSaveClick();
    } else {
      onEditClick();
    }
    // dispatch(
    //   editTodo({
    //     id: todo.id,
    //     text: newText,
    //   })
    // );
    // setIsedit(!isedit);
  };

  useEffect(() => {
    if (isedit && inputRef.current) {
      inputRef.current.focus(); // Focus on the input element using the ref
    }
  }, [isedit]);

  return (
    <TodoStyle $edit={isedit} $completed={todo.completed}>
      <div className="todo-container">
        <div className="todo-input-contianer">
          <input
            disabled={isedit}
            type="checkbox"
            className="checkbox"
            onChange={todoComplete}
            checked={todo.completed}
          />
          <input
            ref={inputRef}
            className="todo-input"
            type="text"
            value={newText}
            readOnly={!isedit}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
        <div className="todo-input-contianer">
          <button
            disabled={todo.completed}
            onClick={handleEditClick}
            className="edit"
          >
            {!isedit ? "Edit" : "Save"}
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
