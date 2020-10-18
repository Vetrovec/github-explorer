import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: -8px;
  }
  100% {
	  top: 0;
  }
`;

export const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 12px;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

export const CircleWrapper = styled.div`
  position: relative;
  width: 12px;
`;

export const Circle = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border: 3px solid #444b65;
  background-color: transparent;
  border-radius: 100%;
`;

export const BouncingCircle = styled(Circle)`
  animation: ${bounce} 1s ease infinite;
  animation-delay: ${(props) => props.delay};
`;
