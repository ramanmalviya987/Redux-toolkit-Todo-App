import styled from "styled-components";

export const TodoStyle = styled.div<{
  $completed: boolean;
  $edit: boolean;
}>`
  .todo-container {
    background: #d2eed2;

    width: 100%;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 10px;
    }
    .todo-input-contianer {
      display: flex;
      align-items: center;
      gap: 10px;
      @media (max-width: 600px) {
        width: 100%;
      }
    }

    .checkbox {
      height: 20px;
      width: 20px;
    }

    button {
      font-size: 18px;
      border: none;
      color: #fff;
      border-radius: 8px;
      padding: 8px;
    }
    .delete {
      background-color: #e73737;
      cursor: pointer;

      &:hover {
        background-color: #f70d0d;
      }
    }
    .edit {
      background-color: #3639ee;
      cursor: ${(props) => (props.$completed ? "not-allowed" : "pointer")};

      opacity: ${(props) => (props.$completed ? "0.5" : "")};

      &:hover {
        background-color: ${(props) => (props.$completed ? "   #1317ef;" : "")};
      }
    }

    .todo-input {
      text-decoration: ${(props) => (props.$completed ? "line-through;" : "")};
      font-size: 18px;
      min-width: 390px;
      padding: 8px;
      border: none;
      background-color: transparent;
      &:focus {
        outline: ${(props) => (props.$edit ? "" : "none")};
      }

      @media (max-width: 600px) {
        min-width: auto;
        width: 100%;
      }
    }
  }
`;
