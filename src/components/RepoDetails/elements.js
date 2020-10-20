import styled from "styled-components";

export const DataCell = styled.td`
  width: 70%;
  border-bottom: ${(props) => (props.last ? "none" : "1px solid #bcbcd5")};
  text-align: center;
`;

export const HeaderCell = styled.th`
  width: 30%;
  padding: 12px 12px;
  border-right: 1px solid #bcbcd5;
  border-bottom: ${(props) => (props.last ? "none" : "1px solid #bcbcd5")};
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
`;
