import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import AllCats from '../AllCats/AllCats';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/all-cats">
          <AllCats />
        </Route>
        <Route path="/liked-cats">
          <div>/liked-cats</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
