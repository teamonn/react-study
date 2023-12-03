/*
 * @Author: Rain
 * @Date: 2023-11-22 23:10:29
 * @LastEditTime: 2023-12-03 23:06:49
 * @Description: 请填写组件描述
 */

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>Home页</div>
            <NavLink to="/shoppingList">购物车 Demo</NavLink>
        </>
    )
}

export default Home;