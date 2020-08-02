import styled from 'styled-components';

export const ButtonStyled = styled.button`
  pointer-events: ${(props) => (props.isDisabled ? `none` : `auto`)};
  opacity: ${(props) => (props.isDisabled ? `0.5` : `1`)};
`;
