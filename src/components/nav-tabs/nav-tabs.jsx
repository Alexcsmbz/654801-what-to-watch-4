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

NavTabs.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default NavTabs;
