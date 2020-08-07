import {useRef, useEffect} from 'react';
import {IMovie} from 'types/app';

interface IProps {
  movie: IMovie,
}

const MoviePlayer: React.FC<IProps> = (props: IProps) => {
  const {previewVideoLink, previewImage} = props.movie;
  const videoRef = useRef(null);
  const TIMEOUT_MS = 1000;

  let timeoutMouseEnter = null;
  let timeoutMouseLeave = null;

  const onMouseEnter = () => {
    timeoutMouseEnter = setTimeout(() => videoRef.current.play(), TIMEOUT_MS);
  };

  const onMouseLeave = () => {
    timeoutMouseLeave = setTimeout(() => videoRef.current.load(), TIMEOUT_MS);
  };

  useEffect(() => () => clearTimeout(timeoutMouseEnter));
  useEffect(() => () => clearTimeout(timeoutMouseLeave));


  return <video
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    ref={videoRef}
    width="280"
    height="175"
    poster={previewImage}
    controls
  >
    <source src={previewVideoLink} type="video/mp4" />
  </video>;
};

export default MoviePlayer;
