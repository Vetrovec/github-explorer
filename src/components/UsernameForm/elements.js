import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const ErrorBox = styled.span`
  display: block;
  color: #fc5c54;
  text-align: right;
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const LabelContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 1px;
  margin-bottom: 3px;
`;

export const LabelText = styled.span`
  font-weight: bold;
`;
