const ReviewPoint = (props) => {
  const {value, onClick} = props;

  return <>
    <input
      className="rating__input"
      id={`star-${value}`}
      type="radio"
      name="rating"
      value={value}
    />
    <label
      onClick={onClick}
      className="rating__label"
      htmlFor={`star-${value}`}
    >
      Rating {value}
    </label>
  </>;
};

ReviewPoint.propTypes = {
  value: propTypes.number,
  onClick: propTypes.func,
};

export default ReviewPoint;
