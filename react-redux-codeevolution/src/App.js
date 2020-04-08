import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/newCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <ItemContainer cake />
    <ItemContainer />
    <HooksCakeContainer />
    <hr />
    <CakeContainer />
    <hr />
    <IceCreamContainer />
    <hr />
    <NewCakeContainer />
    <hr />
    <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
