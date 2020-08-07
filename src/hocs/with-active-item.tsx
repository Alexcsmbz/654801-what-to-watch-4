import {useState} from 'react';
import {Subtract} from 'utility-types';

const withActiveItem = (Component) => (props) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return <Component
    {...props}
    activeIdx={activeIdx}
    setActiveIdx={setActiveIdx}
  />;
};

export default withActiveItem;
