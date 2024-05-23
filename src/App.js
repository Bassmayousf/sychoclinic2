import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import Login from "./pages/login/Login";
import AboutUs from "./pages/aboutUs/AboutUs";
import Chatbot from "./pages/chatbot/Chatbot";
import Articales from "./pages/articales/Articales";
import Account from "./pages/userPro/Account";
import Favorite from "./pages/userPro/Favorite";
import Save from "./pages/userPro/Save";
import Layout2 from './pages/userPro/Layout2';
import Layout3 from './pages/testPationt/Layout3';
import TestList from './pages/testPationt/TestList';
import TestConfirm from './pages/testPationt/TestConfirm';
import TestQuestion from './pages/testPationt/TestQuestion';
import Register from './pages/register/Register';
import TermAndCodation from './pages/register/TermAndCodation';
import Policy from './pages/register/Policy';
import ArticleDetail from './pages/articales/ArticleDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="register" element={<Register />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="term" element={<TermAndCodation />} />
            <Route path="policy" element={<Policy />} />

            <Route path="account" element={<Layout2 />}>
              <Route index element={<Account />} />
              <Route path="favorite" element={<Favorite />} />
              <Route path="save" element={<Save />} />
            </Route>
            <Route path="test" element={<Layout3 />}>
              <Route index element={<TestList />} />
              <Route path="testconfirm" element={<TestConfirm />} />
              <Route path="testquestion" element={<TestQuestion />} />
            </Route>

            <Route path="articles" element={<Articales />} />
            <Route path="articles/:articleId" element={<ArticleDetail />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;