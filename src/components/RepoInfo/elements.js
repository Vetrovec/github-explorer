import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 4px;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  overflow: hidden;
  width: 100%;
  max-height: 30px;
  margin: 0;
  color: #586069;
  font-size: 13px;
  font-style: italic;
  line-height: 15px;
`;
