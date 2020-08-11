interface IProps {
  className?: string,
  item?: string,
  onClick?: () => void,
}

const GenreListItem: React.FC<IProps> = ({item, onClick, className}: IProps) =>
  <li onClick={onClick} className={`catalog__genres-item ${className}`}>
    <div className="catalog__genres-link">{item}</div>
  </li>;

const MemoizedGenreListItem = React.memo(GenreListItem);

export default MemoizedGenreListItem;
