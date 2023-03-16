import React, { useState, useEffect } from 'react';
import LoadingScreen from './Loading/Loading';
import Home from './Home/Home';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <LoadingScreen loading={loading} setLoading={setLoading}/>}
      {!loading && <Home/>}
    </>
  );
}

export default App;