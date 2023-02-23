import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Main;