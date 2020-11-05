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
                title="Original Apple Airpods 3 "
                price={20.35}
                rating={5}
                image="images/apple.jpg" alt=""
                />
                <Product 
                id="12345"
                title="Harry Potter and the cursed child Novel"
                price={10}
                rating={4}
                image="images/harry.jpg" alt=""
                />

            </div>
            <div className="home__row">
                <Product 
                id="12345"
                title="One Plus mobile"
                price={450}
                rating={5}
                image="images/oneplus.jpg" alt=""
                />
                <Product 
                id="12345"
                title="Oppo Mobiles:the best you can get"
                price={200}
                rating={5}
                image="images/oppo.jpg" alt=""
                />

            </div>
           
        
        
        
        
        
        </div>
    )
}

export default Home
