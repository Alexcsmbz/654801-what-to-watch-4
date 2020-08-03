import Logo from 'components/logo/logo.jsx';
import {RelativeBox} from './styles.js';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {isAuth, user} = props;

  return <header className="page-header movie-card__head">
    <Logo />

    <div className="user-block">
      {isAuth && <div className="user-block__avatar">
        <Link to="/mylist">
          <img src={user.avatar_url} alt={`${user.name} avatar`} width="63" height="63" />
        </Link>
      </div> || <Link to="/login">Sign in</Link>}
    </div>
  </header>;
};

Header.propTypes = {
  isAuth: propTypes.bool,
  user: propTypes.object,
};

export default Header;
