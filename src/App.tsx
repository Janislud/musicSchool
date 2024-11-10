// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route components
import MainPage from './Pages/MainPage';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import EnrollmentPage from './Components/EnrollmentPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />   {/* MainPage for the home route */}
        <Route path="/enrollment" element={<EnrollmentPage />} />  {/* Enroll Now page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
