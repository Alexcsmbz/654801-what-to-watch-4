const NavTab = (props) => {
  const {tab, className, onClick} = props;

  return (
    <li onClick={() => onClick(tab)} className={`movie-nav__item ${className}`}>
      <div className="movie-nav__link">{tab.name}</div>
    </li>
  );
};

NavTab.propTypes = {
  tab: propTypes.shape({
    name: propTypes.string,
    isActive: propTypes.boolean,
  }),
  className: propTypes.string,
  onClick: propTypes.func,
};

export default NavTab;
