import React, { useEffect, useState } from "react";
import NavBar from './components/navbar/navbar';
import Product from './components/CatProduct/product'
import Navbar2 from './components/navbar2/navbar2'
import {
  BrowserRouter,
//   Switch,
  Route,
//   Link,
//   useParams
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Route  path="/Ahompage/Category/:keyword" component={Navbar2}/> */}
      <Route  path="/Ahompage/search/:keyword" component={Product}/>
    </BrowserRouter>
  );
}

export default App;
