import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

// 老方式
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// 新方式
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    // <StrictMode>
    //     <BrowserRouter>
    //         <App />
    //     </BrowserRouter>
    // </StrictMode>
    <App />
);
