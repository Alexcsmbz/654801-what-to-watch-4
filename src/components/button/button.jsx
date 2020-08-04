const Button = (props) => {
  const {name, onClick, className} = props.button;
  const {iconKey, width, height} = props.icon ? props.icon : {};

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

Button.propTypes = {
  button: propTypes.shape({
    name: propTypes.string,
    onClick: propTypes.func,
    className: propTypes.string,
  }),
  icon: propTypes.shape({
    iconKey: propTypes.string,
    width: propTypes.string,
    height: propTypes.string,
  })
};

export default Button;
