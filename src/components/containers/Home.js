import React from "react";
import mchoro from "../../assets/img/mchoro.jpg";
import melanin from "../../assets/img/melanin.jpg";
import shosh from "../../assets/img/shosh.jpg";
import Navbar from "../common/Navbar";
import "../../assets/css/home.css"


const Home = () => (
  <div>
    <Navbar />
    <div id="home-background">
      <img style={{width:"20%",height:"420px",'margin-left':"20%"}} src={melanin} alt="" id="picture" />
      <img style={{width:"20%",height:"420px",'margin-left':"25%"}} src={shosh} alt="" id="picture" />
      <br></br>
      <img style={{width:"20%",height:"420px",'margin-left':"42%"}} src={shosh} alt="" id="picture" />
    </div>
  
  </div>
);

export default Home;

