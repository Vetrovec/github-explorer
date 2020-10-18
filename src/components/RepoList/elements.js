import styled from "styled-components";

export const Body = styled.tbody`
  font-style: italic;
`;

export const Header = styled.thead`
  font-weight: bold;
`;

export const RepoDataCell = styled.td`
  overflow: hidden;
  width: 80%;
  max-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RepoLink = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 13px;
  text-decoration: underline;
  transition: font-size 250ms;
  &:hover {
    font-size: 14px;
  }
`;

export const StarDataCell = styled.td`
  width: 20%;
  font-size: 13px;
  text-align: center;
`;

export const StarHeaderCell = styled.th`
  text-align: center;
`;

export const Table = styled.table`
  overflow: hidden;
  width: 100%;
  max-width: 100%;
`;
