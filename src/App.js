import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Pages/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Menu/>
        <Route/>
      </Switch>
    </Router>
  );
}

export default App;
