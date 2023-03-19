import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderOnline from './OrderOnline';
import "../styles.css"


function App(){
    return (
        // <div>
        //     <Home></Home>
        // // </div>
        // <BrowserRouter>
        //     <Route path='/' render={()=><Home/>}></Route>
        //     <Route path='/order' Component={<OrderOnline/>}></Route>
        // </BrowserRouter>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                </Route>
                <Route exact path='/order' element={<OrderOnline/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;