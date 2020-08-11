import {Redirect} from 'react-router-dom';

const PrivateRoute = ({...rest}) =>
  rest.isAuth ? rest.children : <Redirect to="/login" />;

const MemoizedPrivateRoute = React.memo(PrivateRoute);

export default MemoizedPrivateRoute;
