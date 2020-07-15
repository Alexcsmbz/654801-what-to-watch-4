import {useRef, useEffect} from 'react';

const MoviePlayer = (props) => {
  const {previewMp4, previewWebm, poster} = props.movie;
  const {isFullscreen, onFullscreenChange} = props;
  const videoRef = useRef(null);

  const onMouseEnter = () => !isFullscreen ? setTimeout(() => videoRef.current.play(), 1000) : undefined;
  const onMouseLeave = () => !isFullscreen ? setTimeout(() => videoRef.current.load(), 1000) : undefined;

  useEffect(() => {

    if (isFullscreen) {
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

    onFullscreenChange();

    // if (document.exitFullscreen) {
    //   console.log(`exit`);
    // }
    // videoRef.current.onfullscreenchange = () => {
    //   if (isFullscreen) {
    //     onFullscreenChange();

    //   }
    //   // console.log(`on change fullscreen`);
    // };

  });

  return (
    <video
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
  isFullscreen: propTypes.bool,
  onFullscreenChange: propTypes.func,
};

export default MoviePlayer;
