const Subpages = (props) => {
  const {idx, movie, children} = props;

  return children.filter((c, i) => i === idx);
};

Subpages.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default Subpages;
