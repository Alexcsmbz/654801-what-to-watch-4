const NavTab = ({ tab, className, onClick }) =>
  <li onClick={onClick} className={`movie-nav__item ${className}`}>
    <div className="movie-nav__link">{tab.name}</div>
  </li>;

export default NavTab;
