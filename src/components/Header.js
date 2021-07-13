import React, { Component } from 'react';
import "../styles/Header.css";

function Header(props){
    return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Employee Directory</h1>
      <p>Use the search box to narrow results or filter by name</p>
    </div>
  </div>
    );
}


export default Header;