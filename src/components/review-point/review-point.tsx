interface IProps {
  value: number,
  onClick: () => void,
}

const ReviewPoint: React.FC<IProps> = ({value, onClick}: IProps) =>
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

const MemoizedReviewPoint = React.memo(ReviewPoint);

export default MemoizedReviewPoint;
