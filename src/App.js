import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Pages/Menu';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Menu/>
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
