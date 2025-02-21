import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Manage Products</Link>
        </li>
        <li>
          <Link to="/admin/orders">Manage Orders</Link>
        </li>
        <li>
          <Link to="/admin/users">Manage Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
