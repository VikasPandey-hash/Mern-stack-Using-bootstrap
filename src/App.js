
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBaar  from './components/NavBar';
import Home from './components/Home';
import Register from './components/register';
import Edit from './components/Edit';
import {BrowserRouter ,Switch , Route} from "react-router-dom"
 
function App() {
  return (
    <>
      <BrowserRouter>
     
      <Switch>
        <Route exact path ="/" component = {Home} />
        <Route exact path = "/register" component ={Register} />
        <Route exact path = "/edit/:id" component ={Edit} />
      </Switch>
      <NavBaar />
      </BrowserRouter>
      
    </>
  );
}

export default App;
