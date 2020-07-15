const Button = (props) => {
  const {name, onClick, className} = props.button;
  const {iconKey, width, height} = props.icon;

  return (
    <button
      className={`${className} btn movie-card__button`}
      type="button"
      onClick={onClick}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
      >
        <use xlinkHref={iconKey} />
      </svg>
      <span>{name}</span>
    </button>
  );
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

// #play-s
