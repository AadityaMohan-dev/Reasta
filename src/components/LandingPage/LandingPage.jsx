import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import bg from "../Images/bg.webp";
import p1 from "../Images/h1.webp";
import p2 from "../Images/h2.webp";
import p3 from "../Images/h3.webp";
import p4 from "../Images/h4.webp";
import p5 from "../Images/h5.webp";
import b1 from "../Images/b1.webp";
import b2 from "../Images/b2.webp";
import b3 from "../Images/b3.webp";

import Footer from "../Footer/Footer";

function LandingPage() {
  const [listOpt, setListopt] = useState("buy");
  console.log(listOpt);
  const array = [
    { title: "9 Easy-to-Ambitious DIY projects to improve your home", imgUrl: b1},
    { title: "serei shophouse launch in july, opportunity for investors", imgUrl: b2 },
    { title: "looking for a new place? use this time to create your wishlist", imgUrl: b3 },
  ];
  
 const selectOptn =  useCallback(() => {
    const ele = document.getElementById(listOpt);
    ele.style.color = "white";
    ele.style.backgroundColor = "black";
  },[listOpt])
  return (
    <>
    <div className="row-index">
      <div className="row-main">
        <div className="col">
          <div id="head">
            <div id="h-1">Find a perfect property</div>
            <div id="h-2">Where You'll love to live</div>
            <span>
              we help businesses cusomize , automate and scale up their ad
            </span>
            <span>production and delivery.</span>
          </div>
          <div id="optn">
            <div className="opt" id="buy" onClick={() => {setListopt("buy");selectOptn()}}>
              Buy
            </div>
            <div className="opt" id="sell" onClick={() => {setListopt("sell");selectOptn()}}>
              Sell
            </div>
            <div className="opt" id="rent" onClick={() => {setListopt("rent");selectOptn()}}>
              Rent
            </div>
          </div>
          <div id="inputs">
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Property Type" />
            <input type="text" placeholder="Price Range" />
          </div>
          <div id="btn">Search</div>
        </div>
        <div className="col-img">
          <img src={bg} alt="" />
        </div>
      </div>
      <div className="row-bnrs">
        <div className="col-lBnr">
          <h1>Simple & Easy Way to find</h1>
          <h1>your dream Appointment.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet rem
            repellendus ex doloribus at veritatis adipisci veniam quia
            doloremque distinctio, nisi quo!
          </p>
          <div id="btn">get started</div>
        </div>

        <div className="col-rbnr">
          <div className="col-r">
            <div className="row-rlbnr">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FD7E14/external-search-digital-marketing-flatart-icons-outline-flatarticons.png"
                alt="external-search-digital-marketing-flatart-icons-outline-flatarticons"
              />
              <h1>search your location</h1>
            </div>
            <div className="row-rlbnr">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/ios-glyphs/60/FD7E14/card-wallet.png"
                alt="card-wallet"
              />
              <h1>get your dream house</h1>
            </div>
          </div>
          <div className="col-r">
            <div className="row-rlbnr">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/pastel-glyph/64/FD7E14/surprise--v2.png"
                alt="surprise--v2"
              />
              <h1>visit appointment</h1>
            </div>
            <div className="row-rlbnr">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/ios-filled/50/FD7E14/smiling.png"
                alt="smiling"
              />
              <h1>enjoy your appointment</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row-bord">
        <div className="row-brd-c">
          <div className="col">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/ios-filled/50/FD7E14/cheap-2.png"
              alt="cheap-2"
            />
            <h1>$15.4M</h1>
            <h3>owned from property transaction</h3>
          </div>
          <div className="col">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FD7E14/external-navigation-strategy-flatart-icons-solid-flatarticons.png"
              alt="external-navigation-strategy-flatart-icons-solid-flatarticons"
            />
            <h1>25K+</h1>
            <h3>properties for buy & sell sucessfully</h3>
          </div>
          <div className="col">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/glyph-neue/64/FD7E14/fire-element.png"
              alt="fire-element"
            />
            <h1>500</h1>
            <h3>daily completed transaction</h3>
          </div>
          <div className="col">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/ios-filled/50/FD7E14/smiling-face-with-heart.png"
              alt="smiling-face-with-heart"
            />
            <h1>600+</h1>
            <h3>regular clients</h3>
          </div>
        </div>
      </div>
      <div className="row-4">
        <div className="col-4l">
          <h1>simple & easy way to find dream appointment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            architecto, praesentium ad totam perferendis debitis hic expedita
            itaque asperiores fuga fugiat. Fugiat ipsa quo perferendis. Maiores,
            numquam eligendi. Dolor, dicta!
          </p>
          <div id="btn">get started</div>
        </div>
        <div className="col-4r">
          <div className="col-4rl">
            <div className="row-4lu">
              <img src={p1} alt="" />
            </div>
            <div className="row-4ld">
              <img src={p3} alt="" />
            </div>
          </div>
          <div className="col-4rr">
            <div className="row-4ru">
              <img src={p2} alt="" />
            </div>
            <div className="row-4rd">
              <img src={p4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row-5">
        <div className="col-5l">
          <img src={p5} alt="" />
        </div>
        <div className="col-5r">
          <h1>best rated host on popular rental site</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi?
            A facere iure laborum ut. Nam magnam assumenda quod, quasi pariatur
            tenetur expedita laboriosam, voluptas vero praesentium, nemo facere
            tempore.
          </p>
          <div id="row-5rr">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-glyphs/60/checked--v1.png"
              alt="checked--v1"
            />
            <span>Find excellent deals</span>
          </div>
          <div id="row-5rr">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-glyphs/60/checked--v1.png"
              alt="checked--v1"
            />
            <span>friendly host & fast support</span>
          </div>
          <div id="row-5rr">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-glyphs/60/checked--v1.png"
              alt="checked--v1"
            />
            <span>secure payment system</span>
          </div>
          <div id="btn">Learn more</div>
        </div>
      </div>
      <div className="row-6">
        <div className="row-6h">
          <h1>News & Consultant</h1>
          <div id="exp">explore all</div>
        </div>
        <div className="row-6h2">
          {array.map((arr) => {
            return <div id="col">
              <img src={arr.imgUrl} alt="" />
              <h1>{arr.title}</h1>
              <div id="exp">read the article
              <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FD7E14/circled-chevron-right.png" alt="circled-chevron-right"/>
              </div>
            </div>
          })}
        </div>
        <div className="row-6h3">
          <h1>For recent new and updates</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe
            atque sed voluptatibus architecto porro fuga iste aliquam
          </span>
          <div id="mail">
            <input type="text" />
            <div id="btn">subscribe</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default LandingPage;
