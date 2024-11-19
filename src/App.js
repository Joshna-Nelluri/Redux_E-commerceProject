
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/Pages/LandingPAge';
import CartPage from './stores/Pages/CartPage';
import NotFoundPage from './stores/Pages/NotFoundPage';

import MobilesPage from './stores/Pages/MobilePage';
import ComputerPage from './stores/Pages/ComputerPage';
import WatchPage from './stores/Pages/WatchPage';
import MenPage from './stores/Pages/MenPage';
import WomanPage from './stores/Pages/WomanPage';
import FurniturePage from './stores/Pages/FurniturePage';
import KitchenPage from './stores/Pages/KitchenPage';
import BookPage from './stores/Pages/BookPage';
import FridgePage from './stores/Pages/FridgePage';
import SpeakerPage from './stores/Pages/SpeakerPage';
import AcPage from './stores/Pages/AcPage';
import TvPage from './stores/Pages/TvPage';

import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import WatchSingle from './singles/WatchSingle';
import MenSingle from './singles/MenSingle';
import WomanSingle from './singles/WomanSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import KitchenSingle from './singles/KitchenSingle';
import BookSingle from './singles/BookSingle';
import FridgeSingle from './singles/FridgeSingle';
import SpeakerSingle from './singles/SpeakerSingle';
import AcSingle from './singles/AcSingle';
import TvSingle from './singles/TvSingle';


const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />

        <Route path='/mobiles' element={<MobilesPage />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/watches' element={<WatchPage />} />
        <Route path='/menswear' element={<MenPage />} />
        <Route path='/womanswear' element={<WomanPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/fridges' element={<FridgePage />} />
        <Route path='/speakers' element={<SpeakerPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/tv' element={<TvPage />} />


        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/watches/:id' element={<WatchSingle />} />
        <Route path='/menswear/:id' element={<MenSingle />} />
        <Route path='/womanswear/:id' element={<WomanSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/book/:id' element={<BookSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/speaker/:id' element={<SpeakerSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />
    
      </Routes>
      
  );
};

export default App;
