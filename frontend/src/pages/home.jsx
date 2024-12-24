import React from "react";
import styles from './home.module.css'
import Navbar from "../components/navbar"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h1 className={styles.title}>Welcome to the Home Page!</h1>
        </div>
    );
}

export default Home;