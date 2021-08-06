import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {  createContext, useContext} from 'react';
import Cart from './components/Cart/Cart'
// import CartContext from './components/context/CartContex';

// const {noti, setnoti} = useContext(NotiContext)

// console.log(noti);
// console.log(setnoti);

function App() {
  return (
    <Router>
      <>
      <NavBar/>
      <Switch>

        <Route exact path='/' component={ItemListContainer}/>
        <Route path ='/category/:categoryId' component={ItemListContainer}/>
        <Route path='/item/:id' component={ItemDetailContainer}/>
        <Route exact='/cart'>
          <Cart/>
        </Route>
        
      

      </Switch>
      </>
    </Router>
  );
}

export default App;
