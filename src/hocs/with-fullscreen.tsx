import {useState} from 'react';

const withFullscreen = (Component) => (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const openFullscreen = () => setIsFullscreen(true);

  return <Component
    {...props}
    isFullscreen={isFullscreen}
    setIsFullscreen={setIsFullscreen}
    openFullscreen={openFullscreen}
  />;
};

export default withFullscreen;
