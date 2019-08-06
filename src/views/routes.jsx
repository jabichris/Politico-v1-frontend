import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import Home  from './Home.jsx';

const Routes = () => {
    return (
           <BrowserRouter>
              <Route exact path='/' render={() => <Home  />} />
           </BrowserRouter>
          

      );
}
export default Routes;