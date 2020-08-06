import {useRef} from 'react';
import {IMovie} from 'types/app';

interface IProps {
  movie: IMovie,
}

const MoviePlayer: React.FC<IProps> = (props: IProps) => {
  const {previewVideoLink, previewImage} = props.movie;
  const videoRef = useRef(null);

  const onMouseEnter = () => setTimeout(() => videoRef.current.play(), 1000);
  const onMouseLeave = () => setTimeout(() => videoRef.current.load(), 1000);

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
