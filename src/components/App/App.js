import React, { useState, useEffect, useReducer, useRef, useCallback } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import Dexie from 'dexie';
import './App.css';

import { useFetch, useInfiniteScroll } from '../../utils/customHooks';

import Header from '../Header/Header';
import AllCats from '../AllCats/AllCats';
import LikedCats from '../LikedCats/LikedCats';
import NotFound from '../NotFound/NotFound';

function App() {

  // history hook for moving between pages
  const history = useHistory();
  const [path, setPath] = useState('/');
  
  // state for liked cats
  const [savedCats, setSavedCats] = useState([]);

  // state for disabling button
  const [isDisabled, setIsDisabled] = useState(false);

  // create dexie db instance
  const db = new Dexie("savedCatsDB");
  
  // create cats table to store data
  db.version(1).stores({
    // define table params 
    cats: "++id, catId, url" 
  })

  // catch error if db wouldnt open
  db.open().catch((err)=> {
    console.log(err)
  });

  // func to get saved cats from db
  const checkStorage = useCallback(()=> {
    db.cats.toArray()
    .then((initialCats) => {
      setSavedCats(initialCats)
    })
    .catch((err)=> {
      console.log(err);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveCat = (cat) => {

    setIsDisabled(true);

    // new cat object
    const newCat = {
      id: cat.id,
      catId: cat.id,
      url: cat.url
    }

    db.cats.add(newCat)
    .then(() => {
      const newCats = [newCat, ...savedCats];
      // update state with new object
      setSavedCats(newCats);
      setIsDisabled(false);
    })
    .catch((err)=> {
      console.log(err);
      setIsDisabled(false);
    });
  }

  const handleRemoveCat = (cat) => {

    setIsDisabled(true);

    db.cats.delete(cat.id)
    .then(() => {
      const newCats = savedCats.filter((card) => card.id !== cat.id);
      setSavedCats(newCats);
      setIsDisabled(false);
    })
    .catch((err)=> {
      console.log(err);
      setIsDisabled(false);
    });
  }

  const handleAllCatsClick = () => {
    history.push('/all-cats');
    setPath('/all-cats');
  }

  const handleLikedCatsClick = () => {
    history.push('/liked-cats');
    setPath('/liked-cats');
  }

  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(action.images) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  } 
  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'NEXT_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }
  
  // reducers for infinite scroll
  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 }); 
  const [allImages, allImagesDispatch] = useReducer(imgReducer,{ images:[], fetching: true });
  // ref hook to check scroll bottom
  const bottomBoundaryRef = useRef(null);

  useFetch(pager, allImagesDispatch);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch, path);
  
  // check storage to load saved cats
  useEffect(() => {
    checkStorage();
  }, [checkStorage]);

  
  useEffect(() => {
    setPath(history.location.pathname);
  },[history, path]) 

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
          <AllCats
            path={path} 
            allImages={allImages}
            ref={bottomBoundaryRef}
            handleLike={handleSaveCat}
            handleDislike={handleRemoveCat}
            savedCards={savedCats}
            isDisabled={isDisabled}
          />
        </Route>
        <Route path="/liked-cats">
          <LikedCats
            path={path} 
            handleLike={handleSaveCat}
            handleDislike={handleRemoveCat}
            savedCards={savedCats}
            catData={savedCats}
            isDisabled={isDisabled}
          />
        </Route>
        <Route path="/not-found">
          <NotFound 
            header="404"
            description="страница не найдена, плак"
          />
        </Route>
        <Redirect from="*" to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
