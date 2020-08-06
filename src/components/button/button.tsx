interface IProps {
  button?: {
    name: string,
    onClick: () => void,
    className: string,
  },
  icon?: {
    iconKey: string,
    width: string,
    height: string,
  },
}

const Button: React.FC<IProps> = (props: IProps) => {
  const {name, onClick, className} = props.button;
  const {iconKey, width, height} = props.icon || {};

  return <button
    className={className}
    type="button"
    onClick={onClick}
  >
    {props.icon && <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <use xlinkHref={iconKey} />
    </svg>}
    <span>{name}</span>
  </button>;
};

export default Button;
