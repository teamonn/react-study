import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import ShoppingList from './ShoppingList.jsx';
import './style.css';

/** Class 写法 */
// class App extends React.Component{
//     render(){
//         return (
//             <div>Hello, study - react</div>
//         );
//     }
// }

/** Hooks 写法 */
function App () {
    const [count, setCount] = useState(0)

    return (
        // <>
        //     <h1>
        //         Hello React, <NavLink to="/shoppingList">体验 Demo</NavLink>
        //     </h1>
        //     <div className='card'>
        //         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        //     </div>
        // </>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shoppingList" element={<ShoppingList/>} />
            </Routes>
        </HashRouter>
    )
}

export default App;
