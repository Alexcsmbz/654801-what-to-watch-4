import {PopupStyled} from './styles.js';

const Popup = (props) => {
  const {message} = props;

  return <PopupStyled>
    <span>{message}</span>
  </PopupStyled>;
};

Popup.propTypes = {
  message: propTypes.string,
};

export default Popup;
