import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import BookDetail from "./pages/BookDetail";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
