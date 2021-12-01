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
  );
}

export default App;
