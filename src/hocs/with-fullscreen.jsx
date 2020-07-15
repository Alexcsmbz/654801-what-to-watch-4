import {useState} from 'react';

const withFullscreen = (Component) => (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Component
      {...props}
      isFullscreen={isFullscreen}
      setIsFullscreen={setIsFullscreen}
    />
  );
};

export default withFullscreen;
