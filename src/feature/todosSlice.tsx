import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface TodoStates {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const initialState: TodoStates = {
  todo: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todo.push(...action.payload);
    },
    addTodo: (
      state,
      action: PayloadAction<{ text: string; completed: boolean }>
    ) => {
      const newTodo = {
        id: nanoid(),
        ...action.payload,
        // text: action.payload.text,
        // completed: action.payload.completed,
      };
      state.todo.push(newTodo);
    },
    completedTodo: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      const todo = state.todo.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = action.payload.completed;
      }
    },

    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todo.find((el) => el.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addTodo, addTodos, completedTodo, editTodo, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
