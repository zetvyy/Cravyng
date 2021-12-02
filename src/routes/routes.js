import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing_page/LandingPage";
import SignUpForm from "../pages/Sign-Up-Form/SignUpForm";
import SignIn from "../pages/Signin/SignIn";
import Checkout from "../pages/checkout/Checkout";
import Order from "../pages/Order_page/Order";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Signup" component={SignUpForm} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order" component={Order} />
      </Switch>
    </Router>
  );
}
