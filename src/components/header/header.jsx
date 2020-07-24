import Logo from 'components/logo/logo.jsx';
import {RelativeBox} from './styles.js';

const Header = (props) => {

  return <header className="page-header movie-card__head">
    <Logo />

    {/* <h1 className="page-title user-page__title">Sign in</h1> */}

    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  </header>;
};

export default Header;
