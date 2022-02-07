import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
      <nav class="navbar">
        <ul class=" clearfix">
          <li>
            <a href="/">Home</a>     
          </li>
          <li>
            <a href="/pets">Pets</a>
            <ul class="tab">
              <li>
                <a href="/pets">All Pets</a>
              </li>
              <li>
                <a href="/add-pet">Add New Pet</a>
              </li>    
            </ul>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;