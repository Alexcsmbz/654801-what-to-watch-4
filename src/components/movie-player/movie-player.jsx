import {useRef, useState} from 'react';

const MoviePlayer = (props) => {
  const {previewMp4, previewWebm, poster} = props.movie;
  const videoRef = useRef(null);
  const [isMoviePlay, setIsMoviePlay] = useState(false);

  const onMouseEnter = () => {
    setIsMoviePlay(true);
    setTimeout(() => videoRef.current.play(), 1000);
    return isMoviePlay;
  };

  const onMouseLeave = () => {
    setIsMoviePlay(false);
    setTimeout(() => videoRef.current.load(), 1000);
    return isMoviePlay;
  };

  const onClick = () => {};

  return (
    <video
      className="movie-player"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={videoRef}
      width="280"
      height="175"
      poster={poster}
      controls
    >
      <source src={previewWebm} type="video/webm" />
      <source src={previewMp4} type="video/mp4" />
    </video>
  );
};

MoviePlayer.propTypes = {
  movie: propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  }).isRequired,
};

export default MoviePlayer;
