  import React from 'react';

  const NavBar = () => {
 
          return (
        <div>
            <nav id="navbar">
              <div id="logo">
                <a href="index.html"> <img src="../assets/images/politico.png"  height="84" width="84"/>
              <span>Politico</span>
              </a> 
             </div>
             <input id="menu-toggle" type="checkbox" />
             <label className='menu-button-container' htmlFor="menu-toggle">
             <div className='menu-button'></div>
             </label>
             <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Government offices</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sign in</a></li>
             </ul>
            </nav>
        </div> 
            );
      }
   
  export default NavBar;
  