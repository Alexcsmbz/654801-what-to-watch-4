import {useRef, useEffect} from 'react';

const MoviePlayerFullscreen = (props) => {
  const {previewMp4, previewWebm, poster} = props.movie;
  const {isFullscreen, setIsFullscreen} = props;
  const videoRef = useRef(null);

  useEffect(() => {
    if (isFullscreen) {
      setIsFullscreen(false);
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  }, [isFullscreen]);

  return (
    <video
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

MoviePlayerFullscreen.propTypes = {
  movie: propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  }).isRequired,
  isFullscreen: propTypes.bool,
  setIsFullscreen: propTypes.func,
};

export default MoviePlayerFullscreen;
