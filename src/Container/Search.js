import React from "react";
import { Link } from "react-router-dom";
import Header from '../Components/HomeScreen/Header';

function Search() {
  return (
    <div className="app">
      <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
      <Header />
      <div className="background--black">
        <div className="grid-container">
          <div className="container-section search-section" id="search">
            <Link to="/" className="container__link navigation-section__link">
              <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
              Return home page
            </Link>
            <div className="container__header search-section__header"></div>
            <div className="search-options">
              {/* Basic Search */}
              <Link to="/basic-search" className="basic-search-option">
                <h2 className="basic-search-option__heading">BASIC SEARCH</h2>
                {/* Add basic search form or button here */}
              </Link>
              {/* Traditional Search */}
              <div className="traditional-search-option">
                <h2 className="traditional-search-option__heading">
                  TRADITIONAL SEARCH
                </h2>
                {/* Add traditional search form or button here */}
              </div>
              {/* Advanced Search */}
              <div className="advanced-search-option">
                <h2 className="advanced-search-option__heading">
                  ADVANCED SEARCH
                </h2>
                {/* Add advanced search form or button here */}
              </div>
            </div>
          </div>
        </div>
        <p className="search__copyright">&copy; Created by La Trobe University</p>
      </div>
    </div>
  );
}

export default Search;
