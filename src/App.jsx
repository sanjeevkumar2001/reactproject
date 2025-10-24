import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import TopRatedProducts from '../components/TopRatedProducts';
import { Outlet } from 'react-router-dom'
import{ Provider} from "react-redux";
import appStore from '../utils/appStore';

// header and outlet is used , and outlet is used to navigate across all components
// provider is used to access the store to all parts of the appliocation.

function App() {
  return (

    <Provider store={appStore}>
      <Header></Header>
      
      <Outlet></Outlet>
    </Provider>
    

  );
}

export default App;   
