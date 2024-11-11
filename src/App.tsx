// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import EnrollmentPage from './Components/EnrollmentPage';
import EnterForm from './Components/EnterForm';
import About from './Pages/About';
import Courses from './Pages/Courses';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/enter-form" element={<EnterForm/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
