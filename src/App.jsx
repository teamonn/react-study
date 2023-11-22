import React from 'react';
import { useState } from 'react';
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
        <>
            <h1>Hello React</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </>
    )
}

export default App;
