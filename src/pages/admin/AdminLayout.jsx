import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/admin/AdminSidebar'
import './adminLayout.css'

const AdminLayout = () => {
  return (
    <div>
        <div className="admin-container">
      <AdminSidebar />
      <div className="admin-content">
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default AdminLayout