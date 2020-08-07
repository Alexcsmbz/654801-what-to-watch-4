import {Redirect} from 'react-router-dom';

const PrivateRoute = ({...rest}) =>
  rest.isAuth ? rest.children : <Redirect to="/login" />;

export default PrivateRoute;
