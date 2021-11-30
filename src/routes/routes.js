import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing_page/LandingPage";
import SignUpForm from "../pages/Sign-Up-Form/SignUpForm";
import SignIn from "../pages/Signin/SignIn";
import Checkout from "../pages/checkout/Checkout";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Signup" component={SignUpForm} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}
