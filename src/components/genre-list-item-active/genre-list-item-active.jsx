import GenreListItem from 'components/genre-list-item/genre-list-item.jsx';

const GenreListItemActive = (props) => {
  const className = `catalog__genres-item--active ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return <GenreListItem className={className} {...restProps} />;
};

GenreListItemActive.propTypes = {
  className: propTypes.string,
};

export default GenreListItemActive;
