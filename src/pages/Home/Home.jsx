import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDiaplay from '../../components/FoodDisplay/FoodDiaplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDiaplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home
