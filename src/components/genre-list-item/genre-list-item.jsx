const GenreListItem = (props) => {
  const {item, onClick, className} = props;

  return (
    <li onClick={onClick} className={`catalog__genres-item ${className}`}>
      <div className="catalog__genres-link">{item}</div>
    </li>
  );
};

GenreListItem.propTypes = {
  item: propTypes.string.isRequired,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default GenreListItem;
