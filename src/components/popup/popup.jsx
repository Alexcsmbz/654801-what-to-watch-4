import {PopupStyled, Icon, Overlay} from './styles.js';
import Button from 'components/button/button.jsx';

const Popup = (props) => {
  const {message} = props;

  return <>
    <Overlay />
    <PopupStyled>
      <span>{message}</span>
      <Icon>&#128169;</Icon>
      <Button
        button={{
          name: `Reload app`,
          onClick: () => {
            location.reload();
          },
          className: `btn`
        }}
      />
    </PopupStyled>
  </>;
};

Popup.propTypes = {
  message: propTypes.string,
};

export default Popup;
