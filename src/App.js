import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './services/components/Chart/Charts';
import Table from './services/components/Table/Table';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Table}></Route>
        <Route path="/charts" component={Charts}></Route>
      </Switch>
    </div>
  );
}

export default App;
