
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>Home页</div>
            <NavLink to="/shoppingList">体验 Demo</NavLink>
        </>
    )
}

export default Home;