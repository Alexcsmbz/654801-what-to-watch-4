import {Link} from 'react-router-dom';

const Logo = (props) => {
  const {className} = props;

  return (
    <div className="logo">
      <Link to="/" className={`logo__link ${className}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: propTypes.string,
};

export default Logo;
