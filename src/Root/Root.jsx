import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ChatbotWidget from '../AIChatbot/ChatbotWidget';

const Root = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <ChatbotWidget></ChatbotWidget>
            <Footer></Footer>
        </div>
    );
};

export default Root;