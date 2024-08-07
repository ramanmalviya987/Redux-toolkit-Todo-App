import styled from "styled-components";

export const AppStyle = styled.div`
  background: #d2eed2;
  height: 100vh;
  width: 100%;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    position: absolute;
    top: 0;
    margin-top: 24px;
  }
  .todos {
    display: flex;
    flex-direction: column;
    gap: 22px;
    overflow: scroll;
  }
  .container {
    min-width: 40%;
    height: 50%;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;

    padding: 24px;
    overflow: hidden;

    @media (max-width: 600px) {
      min-width: 90%;
      height: 75%;
    }
  }
`;
