import {LoaderStyled} from './styles.js';

const Loader = ({isLoading}) => isLoading ? <LoaderStyled /> : null;

export default Loader;
