import {Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) =>
  rest.isAuth ? rest.children : <Redirect to="/login" />;

export default PrivateRoute;
