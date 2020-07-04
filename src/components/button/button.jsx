const Button = (props) => {
  const {className, name, onClick} = props;

  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >{name}</button>
  );
};

Button.propTypes = {
  className: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Button;
