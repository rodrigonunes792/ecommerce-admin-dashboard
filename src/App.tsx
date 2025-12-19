import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FC } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import './App.css';

/**
 * Main application component with routing configuration
  * @returns The root App component with all routes
   */
const App: FC = () => {
    return (
          <Router>
                <Routes>
                        <Route path="/" element={<Layout />}>
                                  <Route index element={<Navigate to="/dashboard" replace />} />
                                  <Route path="dashboard" element={<Dashboard />} />
                                  <Route path="products" element={<Products />} />
                                  <Route path="orders" element={<Orders />} />
                        </Route>Route>
                </Routes>Routes>
          </Router>Router>
        );
};

export default App;</Router>
