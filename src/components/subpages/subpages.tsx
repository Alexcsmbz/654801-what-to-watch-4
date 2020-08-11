interface IProps {
  idx: number,
  children: JSX.Element[],
}

const Subpages: React.FC<IProps> = ({idx, children}: IProps) => <>{children.filter((_, i) => i === idx)}</>;

const MemoizedSubpages = React.memo(Subpages);

export default MemoizedSubpages;
