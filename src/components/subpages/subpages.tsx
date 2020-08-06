interface IProps {
  idx: number,
  children: JSX.Element[],
}

const Subpages: React.FC<IProps> = ({idx, children}: IProps) => <>{children.filter((_, i) => i === idx)}</>;

export default Subpages;
