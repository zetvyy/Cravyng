<<<<<<< HEAD
import Routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes />
      <Footer />
    </>
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Menu from './Pages/Menu/Menu';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store from './redux/store';
import Profile from './Pages/Profile/Profile';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        {/* <Menu/> */}
        {/* <Profile/> */}
        {/* <Route path="/menu"  component={Menu} /> */}
        <Route path="/profile"  component={Profile} />
      </Switch>
    </Router>
    </Provider>
>>>>>>> 05a8515bd8a8bfaaf988d92ef718a9be8ab70232
  );
}

export default App;
