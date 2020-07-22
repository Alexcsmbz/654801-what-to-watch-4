import styled from 'styled-components';

export const PopupStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  z-index: 50;
  color: #eee5b5;

  @media (min-width: 480px) {
    width: 400px;
    height: 320px;
    left: calc(50% - 200px);
    top: 160px;
  }
`;

