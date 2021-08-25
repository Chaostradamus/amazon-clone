import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/TWAR_2021_GWBleedingHero_3000x1200_POST_Final_en-US_PVD7202_TheTomorrowWar._CB665945242_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: how to constant innovation creates a radically successful businesses paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix stand mixer for baking, stylish kitchen mixer with k-beater, dough hook and whisk, 5 litre glass bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81poj2KljLL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC3738743277 49' curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="234459300"
            title="Amazon Ech (3rd Gen) Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver (4rth generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="BIG ASS CURVED MONITOR"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

//   src =
//     "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/covid19/generic/gwbleedinghero_eng_covidupdate__xsite_1500x600_pv_en-gb._cb428684220_.jpg";
