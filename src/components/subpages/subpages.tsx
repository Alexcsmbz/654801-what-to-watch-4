const Subpages = ({ idx, children }) => children.filter((_, i) => i === idx);

export default Subpages;
