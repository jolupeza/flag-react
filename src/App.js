import React from 'react';
import './App.css';
import CountryList from './components/CountryList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'
import ActionList from './components/ActionList';

const initialState = {
  countries: [],
  countriesByName: [],
  countriesByRegion: [],
  filterByRegion: ''
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
