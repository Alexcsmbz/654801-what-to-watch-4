import {LoaderStyled} from './styles.js';

interface IProps {
  isLoading: boolean,
}

const Loader: React.FC<IProps> = ({isLoading}: IProps) =>
  isLoading ? <LoaderStyled /> : null;

export default Loader;
