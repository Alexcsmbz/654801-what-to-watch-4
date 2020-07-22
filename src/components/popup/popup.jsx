import {PopupStyled} from './styles.js';
import Button from 'components/button/button.jsx';

const Popup = (props) => {
  const {message} = props;

  return <PopupStyled>
    <span>{message}</span>
    <Button
      button={{
        name: `Reload app`,
        onClick: () => {},
        className: `btn`
      }}
    />
  </PopupStyled>;
};

Popup.propTypes = {
  message: propTypes.string,
};

export default Popup;
