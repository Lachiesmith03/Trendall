import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import Header from './Components/HomeScreen/Header';
import HomeScreen from './Container/Home';
import News from './Container/News';
import Search from './Container/Search';
import Article from './Container/Article';
import SearchResult from './Container/SearchResult';
import Gallery from './Container/Gallery';
import BasicSearch from './Container/BasicSearch';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/news" element={<News />} />
            <Route path="/search-tool" element={<Search />} />
            <Route path="/article" element={<Article />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/basic-search" element={<BasicSearch />} />

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
