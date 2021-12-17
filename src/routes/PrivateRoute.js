import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const token = useSelector(state => state.authReducer.token);
  const role = useSelector(state => state.authReducer.role);

  return (
    <Route
      {...rest}
      render={() => {
        if (token && role === "merchant") {
          return children;
        } else {
          return <Redirect to="/order" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
