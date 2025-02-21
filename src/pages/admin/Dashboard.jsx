import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dashboard } from '../../redux/features/product/productSlice';

const AdminDashboard = () => {
const dispatch = useDispatch(); 
  const {count} = useSelector((state)=> state.product);


    useEffect(() => {
       dispatch(dashboard());
    }, [dispatch]);



  return (
    <>
    <h2 className='pageHeading'>Admin Dashboard</h2>
    <div className="dashboard-cards">
      <div className="dashboard-card">
        <h2>Total Products</h2>
        <p>{count?.productCount ? count?.productCount : 0}</p>
      </div>
      <div className="dashboard-card card-green">
        <h2>Total Orders</h2>
        <p>{count?.orderCount ? count?.orderCount : 0}</p>
      </div>
      <div className="dashboard-card card-yellow">
        <h2>Total Users</h2>
        <p>{count?.userCount ? count?.userCount : 0}</p>
      </div>
    </div>
    </>
  )
}

export default AdminDashboard