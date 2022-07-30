import React, { useEffect } from 'react'
import NavbarMain from "../components/navbar/Navbar"
import Footer from "../components/navbar/Footer"
// import Furniture from "../components/categories/Furniture"
import Navigator from "../routes/Navigator"
const Home = () => {


    return (
        <div>
            <NavbarMain />
            <div id="#content">
                <Navigator />
            </div>
            <Footer />
        </div>
    )
}

export default Home
