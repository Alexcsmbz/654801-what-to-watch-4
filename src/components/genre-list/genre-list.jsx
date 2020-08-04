const GenreList = (props) => {
  const {children} = props;

  return <ul className="catalog__genres-list">
    {children}
  </ul>;
};

GenreList.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default GenreList;
