interface IProps {
  idx: number,
  children: Element[],
}

const Subpages: React.FC<IProps> = ({ idx, children }: IProps): Element[] =>
  children.filter((_, i) => i === idx);

export default Subpages;
