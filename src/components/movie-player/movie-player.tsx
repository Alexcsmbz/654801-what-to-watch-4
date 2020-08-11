import {useRef, useEffect} from 'react';
import {IMovie} from 'types/app';

interface IProps {
  movie: IMovie,
}

const MoviePlayer: React.FC<IProps> = (props: IProps) => {
  const {previewVideoLink, previewImage} = props.movie;
  const _videoRef = useRef(null);
  const TIMEOUT_MS = 1000;

  let timeoutMouseEnter = null;
  let timeoutMouseLeave = null;

  const onMouseEnter = () => {
    if (_videoRef.current !== null) {
      _videoRef.current.pause();
      timeoutMouseEnter = setTimeout(() => _videoRef.current.play(), TIMEOUT_MS);
    }
  };

  const onMouseLeave = () => {
    if (_videoRef.current !== null) {
      _videoRef.current.pause();
      timeoutMouseLeave = setTimeout(() => _videoRef.current.load(), TIMEOUT_MS);
    }
  };

  useEffect(() => () => clearTimeout(timeoutMouseEnter));
  useEffect(() => () => clearTimeout(timeoutMouseLeave));

  return <video
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    preload="on"
    ref={_videoRef}
    width="280"
    height="175"
    poster={previewImage}
    controls
  >
    <source src={previewVideoLink} type="video/mp4" />
  </video>;
};

const MemoizedMoviePlayer = React.memo(MoviePlayer);

export default MemoizedMoviePlayer;
