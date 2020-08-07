import Logo from 'components/logo/logo.tsx';
import {Link} from 'react-router-dom';
import {baseURL} from 'config';
import {IUser} from 'types/app';

interface IProps {
  user: IUser,
  isAuth: boolean,
}

const Header: React.FC<IProps> = ({isAuth, user}: IProps) =>
  <header className="page-header movie-card__head">
    <Logo />
    <div className="user-block">
      {isAuth && <div className="user-block__avatar">
        <Link to="/mylist">
          <img src={`${baseURL}${user.avatarUrl}`} alt={`${user.name} avatar`} width="63" height="63" />
        </Link>
      </div> || <Link to="/login">Sign in</Link>}
    </div>
  </header>;

export default Header;
