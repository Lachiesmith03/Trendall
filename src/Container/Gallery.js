import React from 'react'; 
import Header from '../Components/HomeScreen/Header';

import SearchBar from '../Components/NewsPage/SearchBar';
import PinterestLayout from '../Components/Gallery/PinterestLayout';



function Gallery() {

    return (
        <div className="app">
            <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
            <Header />
            <div className="app__container">
                <div className="background--black">
                    <div className="grid-container">
                        <h1 className='page-header gallery-header'>GALLERY</h1>
                        <SearchBar />
                        <PinterestLayout/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;