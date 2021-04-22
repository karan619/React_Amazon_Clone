import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-banner"
        />
        <div className="home_row">
          <Product
            id="123466"
            title="Fossil Men's Grant Sport Stainless Steel and Leather Chronograph Quartz Watch"
            price={80}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81MkB2g2owL._AC_UY445_.jpg"
          />

          <Product
            id="1256466"
            title="JBL Endurance Run Wired Sweatproof In-Ear Sport Headphones with One-Button Mic/Remote - Black"
            price={29.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61kH38AmRKL._AC_SL1500_.jpg"
          />

          <Product
            id="1213256666"
            title="Spigen Ultra Hybrid Works with Apple iPhone 12 Case/iPhone 12 Pro Case (2020) - Crystal Clear"
            price={11.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61LJwCnSoPL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="1258998766"
            title="LapGear Home Office Pro Lap Desk with Wrist Rest, Mouse pad, and Phone Holder - Black Carbon - Fits up to 15.6 Inch laptops - Style No. 91598"
            price={49.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81gH-hHJeLL._AC_SX679_.jpg"
          />

          <Product
            id="1245879666"
            title="JBL PartyBox 100 Powerful 160-Watt Portable Wireless Bluetooth Audio Party System with up to 12 Hours of Battery Life - Black"
            price={449.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71ISGefOkVL._AC_SL1500_.jpg"
          />

          <Product
            id="12546666"
            title="Projector, APEMAN Native 1920 x 1080P HD Portable Projector, Support 4K, 300"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71EY6yQOTJL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12545666"
            title="TCL 50S425-CA 4K Ultra HD Smart LED Television (2019), 50"
            price={379.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71xkwNx-nfL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
