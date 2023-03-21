import React, { useState, useEffect } from 'react';
import LoadingScreen from './Loading/Loading';
import Home from './Home/Home';
import { Menu } from './Menu/Menu';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      {loading && <LoadingScreen loading={loading} setLoading={setLoading}/>}
      {!toggleMenu && <Menu toggleMenu ={toggleMenu} setToggleMenu={setToggleMenu}/>}
      {!loading && <Home toggleMenu ={toggleMenu} setToggleMenu={setToggleMenu}/>}
    </>
  );
}

export default App;