import { Navigate, Route, Routes } from 'react-router-dom';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-slate-900">
      <AccessibilityToolbar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}