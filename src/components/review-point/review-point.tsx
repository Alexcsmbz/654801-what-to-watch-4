const ReviewPoint = ({ value, onClick }) =>
  <>
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

export default ReviewPoint;
