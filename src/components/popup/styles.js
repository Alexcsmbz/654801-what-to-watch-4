import styled from 'styled-components';

export const PopupStyled = styled.div`
  padding: 32px 16px;
  text-align: center; 
  position: fixed;
  display: grid;
  justify-content: center;
  grid-gap: 16px;
  align-items: center;
  width: 400px;
  height: 320px;
  border-radius: 4px;
  left: calc(50% - 200px);
  top: 160px;
  background-color: #1f1f1f;
  z-index: 50;
  color: #eee5b5;
`;

export const Icon = styled.div`
  font-size: 64px;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 49;
`;
