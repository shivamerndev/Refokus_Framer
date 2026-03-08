import React from 'react'
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
      <div className='bg-black text-white min-h-screen font-[Plain] w-full'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees/>
        <Cards/>
        <Footer/>
      </div>
  )
}

export default App;
