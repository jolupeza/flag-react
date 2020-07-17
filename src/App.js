import React from 'react';
import './App.css';
import CountryList from './components/CountryList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'
import ActionList from './components/ActionList';
import Header from './components/Header';
import CountryPage from './components/CountryPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

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
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage}>
          </Route>
          <Route path="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
