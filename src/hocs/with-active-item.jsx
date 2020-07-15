import {useState} from 'react';

const withActiveItem = (Component) => (props) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Component
      {...props}
      activeIdx={activeIdx}
      setActiveIdx={setActiveIdx}
    />
  );
};

export default withActiveItem;
