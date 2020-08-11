import {useRef, useEffect} from 'react';
import {IMovie} from 'types/app';

interface IProps {
  movie: IMovie,
  isFullscreen: boolean,
  setIsFullscreen: (s: boolean) => void,
}

const MoviePlayerFullscreen: React.FC<IProps> = (props: IProps) => {
  const {videoLink} = props.movie;
  const {isFullscreen, setIsFullscreen} = props;
  const _videoRef = useRef(null);

  useEffect(() => {
    if (isFullscreen) {
      setIsFullscreen(false);
      if (_videoRef.current.requestFullscreen) {
        _videoRef.current.requestFullscreen();
      } else if (_videoRef.current.mozRequestFullScreen) {
        _videoRef.current.mozRequestFullScreen();
      } else if (_videoRef.current.webkitRequestFullscreen) {
        _videoRef.current.webkitRequestFullscreen();
      } else if (_videoRef.current.msRequestFullscreen) {
        _videoRef.current.msRequestFullscreen();
      }
    }
  }, [isFullscreen]);

  return <video
    ref={_videoRef}
    width="280"
    height="175"
    controls
  >
    <source src={videoLink} type="video/mp4" />
  </video>;
};

const MemoizedMoviePlayerFullscreen = React.memo(MoviePlayerFullscreen);

export default MemoizedMoviePlayerFullscreen;
