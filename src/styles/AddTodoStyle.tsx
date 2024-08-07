import styled from "styled-components";

export const AddTodoStyle = styled.div`
  form {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
    input {
      min-width: 500px;
      padding: 12px;
      border: 1px solid black;
      font-size: 16px;
      border-radius: 8px;
      @media (max-width: 600px) {
        min-width: auto;
      }
    }

    button {
      border: none;
      background-color: #d2eed2;
      border-radius: 8px;
      padding: 12px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #bdf5bd;
      }
    }
  }
`;
