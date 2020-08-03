import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) =>
  rest.isAuth ? rest.children : <Redirect to="/login" />;

PrivateRoute.propTypes = {
  component: propTypes.func,
};

export default PrivateRoute;
