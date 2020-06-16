import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/movie-card/movie-card.jsx';

class MovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movieOnFocus: {}
    };
  }

  render() {
    const {films} = this.props;
    const onMouseEnter = (movieOnFocus) => {
      this.setState({movieOnFocus});
    };
    const onMouseLeave = () => {
      this.setState({movieOnFocus: {}});
    };

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
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  })).isRequired,
};

export default MovieCardList;
