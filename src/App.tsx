import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FloatingNav from './components/ui/FloatingNav';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import TailoredBusinessSolutions from './pages/TailoredBusinessSolutions';
import BusinessSupportServices from './pages/BusinessSupportServices';
import TrainingDevelopment from './pages/TrainingDevelopment';
import ServiceRequest from './pages/ServiceRequest';
import BlogPost from './pages/BlogPost';
import BusinessTools from './pages/BusinessTools';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

const AppContent = () => {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/tools" element={<BusinessTools />} />
        <Route path="/tailored-business-solutions" element={<TailoredBusinessSolutions />} />
        <Route path="/business-support-services" element={<BusinessSupportServices />} />
        <Route path="/training-development" element={<TrainingDevelopment />} />
        <Route path="/request/:type" element={<ServiceRequest />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;