import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import AllCats from '../AllCats/AllCats';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <AllCats />
        </Route>
        <Route path="/liked-cats">
          <div>/liked-cats</div>
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
