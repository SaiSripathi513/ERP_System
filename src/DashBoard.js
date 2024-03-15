
import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css'

const DashBoard = () => {
    return (
    <div>
        <h1>Dashboard</h1>
        <p>Total number of products: {/* Display total products here */}</p>
        <p>Total number of orders: {/* Display total orders here */}</p>
        <Link to="/products">Manage Products</Link>
        <Link to="/orders">Manage Orders</Link>
    </div>
    );
};

export default DashBoard;
