import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__img" src="images/back.jpg" alt=""/>
            <div className="home__row">
                <Product 
                id="12345"
                title="the King of the jungle lion"
                price={20.35}
                rating={5}
                image="images/apple.jpg" alt=""
                />
                <Product 
                id="12345"
                title="the King of the jungle lion"
                price={20.35}
                rating={5}
                image="images/apple.jpg" alt=""
                />

            </div>
            <div className="home__row">
                <Product 
                id="12345"
                title="the King of the jungle lion"
                price={20.35}
                rating={5}
                image="images/apple.jpg" alt=""
                />
                <Product 
                id="12345"
                title="the King of the jungle lion"
                price={20.35}
                rating={5}
                image="images/apple.jpg" alt=""
                />
                <Product 
                id="12345"
                title="the King of the jungle lion"
                price={20.35}
                rating={5}
                image="images/apple.jpg" alt=""
                />

            </div>
           
        
        
        
        
        
        </div>
    )
}

export default Home
