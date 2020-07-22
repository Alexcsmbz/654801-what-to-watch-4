import styled, {keyframes} from 'styled-components';

const dualRing = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 30px);
    top: calc(50% - 30px);
    width: 60px;
    height: 60px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #a5615f;
    border-color: #dfcf77 transparent #dfcf77 transparent;
    animation: ${dualRing} 1.2s linear infinite;
    z-index: 101;
  }
`;
