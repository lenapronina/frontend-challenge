import React, { useState, useEffect, useReducer, useRef, useCallback } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import Dexie from 'dexie';
import './App.css';

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

  // create dexie db instance
  const db = new Dexie("savedCatsDB");
  
  // create cats table to store data
  db.version(1).stores({
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
    });
  // use path dependency to update data between routes ?
  }, [])

  const handleSaveCat = (cat) => {

    const newCat = {
      id: cat.id,
      catId: cat.id,
      url: cat.url
    }

    console.log(newCat)
    
    db.cats.add(newCat)
      .then(() => {
        const newCats = [newCat, ...savedCats];
        setSavedCats(newCats);
        console.log(savedCats)
    });
  }

  const handleRemoveCat = (cat) => {
    db.cats.delete(cat.id)
    .then(() => {
      const newCats = savedCats.filter((card) => card.id !== cat.id);
      setSavedCats(newCats);
    });
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
  const [imgData, imgDispatch] = useReducer(imgReducer,{ images:[], fetching: true});
  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }
  const [ pager, pagerDispatch ] = useReducer(pageReducer, { page: 0 })

  

  // implement infinite scrolling with intersection observer
let bottomBoundaryRef = useRef(null);
const scrollObserver = useCallback(
  node => {
    new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.intersectionRatio > 0) {
          pagerDispatch({ type: 'ADVANCE_PAGE' });
        }
      });
    }).observe(node);
  },
  [pagerDispatch]
);



  const handleAllCatsClick = () => {
    history.push('/all-cats');
    setPath('/all-cats');
  }

  const handleLikedCatsClick = () => {
    history.push('/liked-cats');
    setPath('/liked-cats');
  }

  useEffect(() => {
    imgDispatch({ type: 'FETCHING_IMAGES', fetching: true })
    fetch(`https://api.thecatapi.com/v1/images/search?limit=15&page=${pager.page}`)
      .then(data => data.json())
      .then(images => {
        imgDispatch({ type: 'STACK_IMAGES', images })
        imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
      })
      .catch(e => {
        // handle error
        imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
        return e
      })
  }, [ imgDispatch, pager.page]);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

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
            imgData={imgData}
            ref={bottomBoundaryRef}
            handleLike={handleSaveCat}
            handleDislike={handleRemoveCat}
            savedCards={savedCats}
          />
        </Route>
        <Route path="/liked-cats">
          <LikedCats
            path={path} 
            handleLike={handleSaveCat}
            handleDislike={handleRemoveCat}
            savedCards={savedCats}
            catData={savedCats}
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
