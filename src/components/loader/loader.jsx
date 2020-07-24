import {LoaderStyled} from './styles.js';

const Loader = (props) => {
  const {isLoading} = props;

  return isLoading ? <LoaderStyled /> : null;
};

Loader.propTypes = {
  isLoading: propTypes.bool,
};

export default Loader;
