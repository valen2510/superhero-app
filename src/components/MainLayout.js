import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const SUPERHERO_URL = process.env.REACT_APP_API_URL;

function MainLayout({ setIsAuth }) {
  return (
    <>
      <Header setIsAuth={setIsAuth} />
      <h3 className='title has-text-white is-3 pt-6 mb-2 mt-3'>Equipo</h3>
      <div className='columns is-desktop p-4'>
        <Route path='/'>
          <Home url={SUPERHERO_URL} />
        </Route>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
