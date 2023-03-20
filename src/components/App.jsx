import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderOnline from './OrderOnline';
// import Signup from './Signup';
import Login from './Login/Login';
import Signup from './Signup/Signup';
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
                <Route path='/order' element={<OrderOnline/>}>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;


  
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
          
// <p>A simple React app.....</p>
  
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <form action="../../post" method="post" 
//               className="form">
//           <button type="submit">Connected?</button>
//         </form>
//       </header>
//     </div>
//   );
// }
  
// export default App;