const GenreListItem = ({item, onClick, className}) =>
  <li onClick={onClick} className={`catalog__genres-item ${className}`}>
    <div className="catalog__genres-link">{item}</div>
  </li>;

export default GenreListItem;
