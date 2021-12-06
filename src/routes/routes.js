import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/landing_page/LandingPage";
import SignUpForm from "./../Pages/Sign-Up-Form/SignUpForm";
import SignIn from "../Pages/Signin/SignIn";
import Checkoutcart3 from "../Components/checkout-cart-3/checkout-cart-3";
import Menu from "../Pages/Menu/Menu";
import Profile4 from "../Profile/profile4";
import Checkout from "../Pages/checkout/Checkout";
import Order from "../Pages/Order_page/Order";
import Profile from "../Pages/Profile/Profile";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route path="/menu" component={Menu} />
        <Route path="/cart" component={Checkoutcart3} />
        <Route path="/profile1" component={Profile4} />
        <Route exact path="/checkout2" component={Checkout} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
