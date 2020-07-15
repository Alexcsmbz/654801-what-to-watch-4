const ButtonMore = (props) => {
  const {className, name, onClick} = props;

  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >{name}</button>
  );
};

ButtonMore.propTypes = {
  className: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ButtonMore;
