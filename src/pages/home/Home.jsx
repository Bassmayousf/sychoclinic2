import React from 'react';
import Header from '../../components/header/Header';
import Nav2 from '../../components/nav2/Nav2';
import Chatboot from '../../components/chatboot/Chatboot';
import Feedback from '../../components/feedback/Feedback';
import Test from '../../components/test/Test';
import Articles from '../../components/articles/Articles';
import SupportUs from '../../components/supportUs/SupportUs';
import '../../app.css'


const Home = () => {
  return (
    <div id='home'>
      <Header/>
      <Nav2/>
      <Chatboot/>
      <Feedback/>
      <Test/>
      <Articles/>
      <SupportUs/>
   
    </div>
  );
}

export default Home;
