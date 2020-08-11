import {LoaderStyled} from './styles.js';

interface IProps {
  isLoading: boolean,
}

const Loader: React.FC<IProps> = ({isLoading}: IProps) =>
  isLoading ? <LoaderStyled /> : null;

const MemoizedLoader = React.memo(Loader);

export default MemoizedLoader;
