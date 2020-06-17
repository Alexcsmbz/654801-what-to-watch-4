import MovieCard from 'components/movie-card/movie-card.jsx';

class MovieCardList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {movieOnFocus: {}};

    this.onMouseLeave = () => this.setState({movieOnFocus: {}});
    this.onMouseEnter = (movieOnFocus) => this.setState({movieOnFocus});
  }

  render() {
    const {films} = this.props;
    const {onMouseEnter, onMouseLeave} = this;

    return (
      films.map((movie) =>
        <MovieCard
          key={movie.name}
          movie={movie}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )
    );
  }
}

MovieCardList.propTypes = {
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
};

export default MovieCardList;
