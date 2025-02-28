import About from "@/components/About";
import Banner from "@/components/Banner";
import MainFeatures from "@/components/MainFeatures";
import Products from "@/components/Products";
import Slidebar from "@/components/Slidebar";
import Layout from "@/components/Layout";

import React from 'react'

function Home() {
  return (
    <div>
      <Banner />
      <Slidebar />
      <About />
      <Products />
      <MainFeatures />
    </div>
  )
}

export default Home