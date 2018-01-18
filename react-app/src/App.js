import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="main">
      <header className="top">
      <div id="name">
        <p><i class="fa fa-book menu-icon" aria-hidden="true"></i>Book Store</p>
      </div>
      <div id="topmenu" class="headermenu">
        <ul class="topmenu">
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Our Support</a>
          </li>
          <li>
            <a href="login.html" id="replace">Login
              <i class="fa fa-check-circle " aria-hidden="true"></i>
            </a>
          </li>
          <li id="logout" style={{visibility: hidden}} onclick="logout()">
            <a href="#">Logout</a>
          </li>
        </ul>-->
      </div>
      <script src="js/login.js"></script>

      </header>

      <nav class="sidenav">
        <div class="navmenu">
          <ul class="mainmenu">
            <li>
              <a href="#">
                <i class="fa fa-globe menu-icon" aria-hidden="true"></i>Browse</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-shopping-cart menu-icon" aria-hidden="true"></i>Buy Books</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-star menu-icon" aria-hidden="true"></i>Favourite Books</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-th-list menu-icon" aria-hidden="true"></i>Wishlist</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>

      <h2 id="browse">Browse Available Books</h2>
      <div class="toppart">
        <ul class="inlinemenu">

          <li><a href="#" id="allBooks">All Books</a></li>
          <li><a href="#" id="recentBooks">Most Recent</a></li>
          <li><a href="#" id="popularBooks">Most Popular</a></li>
          <li><a href="#" id="freeBooks">Free Books</a></li>

        </ul>
        <div class="search-container">

          <span class="fa fa-search"></span>
          <input placeholder="Enter Keywords" />

        </div>

      </div>

      <div id="bookList"></div>
      </main>

      <footer>

      <div class="cont" id=" container">
        <button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
        <div class="object1" id="one"></div>
        <div class="object2" id="two"></div>
        <div class="object3" id="three"></div>


        <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
      </div>

      <ul class="help">
        <li>
          <a href="#">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-cog" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      </footer>
      </div>
    );
  }
}*/


export default App;
