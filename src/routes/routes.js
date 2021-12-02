import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing_page/LandingPage";
import SignUpForm from "./../Pages/Sign-Up-Form/SignUpForm";
import SignIn from "../pages/Signin/SignIn";
import Checkoutcart from "../checkout-cart/checkout-cart";
import Checkoutcart3 from "../checkout-cart-3/checkout-cart-3";
import Menu from "../Pages/Menu/Menu";
import Profile4 from "../Profile/profile4";
import Checkout from "../pages/checkout/Checkout";
import Order from "../pages/Order_page/Order";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Signup" component={SignUpForm} />
        <Route exact path="/Signin" component={SignIn} />
        <Route path="/menu" component={Menu} />
        <Route path="/cart" component={Checkoutcart3} />
        <Route path="/checkout" component={Checkoutcart} />
        <Route path="/profile" component={Profile4} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order" component={Order} />
      </Switch>
    </Router>
  );
}
