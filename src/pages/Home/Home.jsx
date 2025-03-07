import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [cat,setCat] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={cat} setCategory={setCat} />
      <FoodDisplay category={cat}/>
      <AppDownload />
    </div>
  )
}

export default Home
