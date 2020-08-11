import GenreListItem from 'components/genre-list-item/genre-list-item.tsx';

interface IProps {
  [key: string]: any,
}

const GenreListItemActive: React.FC<IProps> = (props: IProps) => {
  const className = `catalog__genres-item--active ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return <GenreListItem className={className} {...restProps} />;
};

const MemoizedGenreListItemActive = React.memo(GenreListItemActive);

export default MemoizedGenreListItemActive;
