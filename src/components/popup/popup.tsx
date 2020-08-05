import {PopupStyled, Icon, Overlay} from './styles.js';
import Button from 'components/button/button.tsx';

const Popup = ({ message }) =>
  <>
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

export default Popup;
