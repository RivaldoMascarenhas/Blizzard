import styled from "styled-components";

export const ButtonStyles = styled.button`
  border: none;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  justify-content: center;
  width: 70%;
  cursor: pointer;
`;
