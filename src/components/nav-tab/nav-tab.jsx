const NavTab = (props) => {
  const {name} = props;

  return (
    <li className="movie-nav__item movie-nav__item--active">
      <a href="#" className="movie-nav__link">{name}</a>
    </li>
  );
};

NavTab.propTypes = {

};
