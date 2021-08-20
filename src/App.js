import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import Checkout from './Components/Checkout';
import { BrowserRouter ,Switch,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      
      <Header/>
        <Switch>
          <Route path="/checkout" exact>
            
            <Checkout />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>  

      </div>
    </BrowserRouter>
  )
}

export default App;
