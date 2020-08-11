interface IProps {
  children: JSX.Element[],
}

const GenreList: React.FC<IProps> = ({children}: IProps) =>
  <ul className="catalog__genres-list">{children}</ul>;

const MemoizedGenreList = React.memo(GenreList);

export default MemoizedGenreList;
