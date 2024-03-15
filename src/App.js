// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './OrdersManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={DashBoard} />
        <Route path="/products" component={ProductsManagement} />
        <Route path="/orders" component={OrdersManagement} />
      </Routes>
    </Router>
  );
}

export default App;
