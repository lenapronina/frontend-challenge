import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import AllCats from '../AllCats/AllCats';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {

  // history hook for moving between pages
  const history = useHistory();
  const [path, setPath] = useState('/');


  const handleAllCatsClick = () => {
    history.push('/all-cats');
    setPath('/all-cats');
  }

  const handleLikedCatsClick = () => {
    history.push('/liked-cats');
    setPath('/liked-cats');
  }

  useEffect(() => {
    setPath(history.location.pathname);
 },[history]) 

  return (
    <div className="app">
      <Header 
        path={path} 
        handleAllCatsClick={handleAllCatsClick}
        handleLikedCatsClick={handleLikedCatsClick}
      />
      <Switch>
        <Redirect exact from="/" to="/all-cats" />
        <Route path="/all-cats">
          <AllCats />
        </Route>
        <Route path="/liked-cats">
          <div>/liked-cats</div>
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Redirect from="*" to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
