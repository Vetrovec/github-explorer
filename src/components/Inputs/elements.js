import styled from "styled-components";

export const Button = styled.button`
  min-width: 120px;
  height: 30px;
  padding: 0 8px;
  border: none;
  background-color: #fc5c54;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  height: 30px;
  padding: 0 8px;
  border: 1px solid #bcbcd5;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
`;
