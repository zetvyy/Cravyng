import SignUpForm from "./Sign-Up-Form/SignUpForm";
import Checkoutcart from "./checkout-cart/checkout-cart";
import Checkoutcart3 from "./checkout-cart-3/checkout-cart-3";
import Menu from "./Pages/Menu";
import Profile4 from "./Profile/profile4";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/cart" component={Checkoutcart3} />
          <Route path="/menu" component={Menu} />
          <Route path="/checkout" component={Checkoutcart} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/profile" component={Profile4} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
