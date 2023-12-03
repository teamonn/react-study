/*
 * @Author: Rain
 * @Date: 2023-11-22 23:03:37
 * @LastEditTime: 2023-12-04 00:28:58
 * @Description: 模拟购物车效果
 */

import React, { useState, useEffect } from 'react';
import './assets/shopping-list.css';

const shoppingList = () => {
    const [goods, setGoods] = useState([
        {
            name: 'iphone 12',
            count: 1,
        },
        {
            name: '荣耀 X30',
            count: 3,
        },
        {
            name: 'RedMi Note 11',
            count: 2,
        },
        {
            name: 'Oppo K9x',
            count: 5,
        },
        {
            name: 'Huawei Mate 60',
            count: 4,
        },
        {
            name: '三星 Xs 30',
            count: 10,
        },
    ]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(goods.reduce((acc, cur) => acc + cur.count, 0));
    }, [goods]) 

    const addCurrentItem = (index) => {
        setGoods(goods.map((item, idx) => {
            if (idx === index) {
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return item;
        }))
    }

    const deleteCurrentItem = (index) => {
        setGoods(goods.map((item, idx) => {
            if (idx === index && item.count > 0) {
                return {
                    ...item,
                    count: item.count - 1,
                };
            }
            return item;
        }))
    }

    return <>
        <section className="shopList">
            <h1>京西商城</h1>
            <ul>
                {
                    goods.length && 
                    goods.map((item, index) => <li key={index} >
                        <p>{ item?.name }</p>
                        <div className="actionBar">
                            {
                                item?.count > 0 && (
                                    <span onClick={() => deleteCurrentItem(index)}>－</span>
                                )
                            }
                            {
                                item?.count > 0 && (
                                    <strong>{ item?.count }</strong>
                                )
                            }
                            <span onClick={() => addCurrentItem(index)}>＋</span>
                        </div>
                    </li>)
                }
            </ul>
            { count > 0 && (<p>
                <span>总计：</span>
                <span>{ count }</span>
                <span>件商品</span>
            </p>)}
        </section>
    </>
}

export default shoppingList;