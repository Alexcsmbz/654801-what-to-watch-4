import {NavLink} from 'components/nav-link/nav-link.jsx';

const NavTabs = (props) => {
  const {children} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {children}
      </ul>
    </nav>
  );
};
//  {/* <li className="movie-nav__item">
//           <a href="#" className="movie-nav__link">Details</a>
//         </li>
//         <li className="movie-nav__item">
//           <a href="#" className="movie-nav__link">Reviews</a>
//         </li>
//        */}
