import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/landing_page/LandingPage";
import SignUpForm from "./../Pages/Sign-Up-Form/SignUpForm.jsx";
import SignIn from "../Pages/Signin/SignIn";
import Checkoutcart3 from "../Components/checkout-cart-3/checkout-cart-3";
import Menu from "../Pages/Menu/Menu";
import Profile4 from "../Profile/profile4";
import Checkout from "../Pages/checkout/Checkout";
import Order from "../Pages/Order_page/Order";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sign-up/merchant" component={SignUpForm} />
        <Route exact path="/sign-up/customer" component={SignUpForm} />
        <Route exact path="/sign-in/customer" component={SignIn} />
        <Route exact path="/sign-in/merchant" component={SignIn} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/cart" component={Checkoutcart3} />
        <Route exact path="/profile-empty" component={Profile4} />
        <Route exact path="/checkout" component={Checkout} />

        {/* Private Route */}
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route exact path="/order" component={Order} />
      </Switch>
    </Router>
  );
}
