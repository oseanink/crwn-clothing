import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

console.log("test..1..2...3")

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route path='/hats' component= {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
