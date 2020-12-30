
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SeracgPage from './SeracgPage';

//https://developers.google.com/custom-search/v1
//https://cse.google.com/cse/create/new


// api AIzaSyAclxIwQVsjp-EbaG1PaAOT_18kYx2_kXQ
// engine id 517626a7efd15eb53
function App() {
  return (

    <div className='App'>
    <BrowserRouter>
    <Switch>
    <Route path='/searc'><SeracgPage></SeracgPage></Route>
      <Route  path ='/' component={Home}></Route>
      
    </Switch>
    
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
