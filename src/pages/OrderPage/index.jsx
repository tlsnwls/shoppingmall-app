import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import OrdersList from './orders-list/OrdersList';

const OrderPage = () => {

  const { isAuth } = useAuth();
  
  // 로그인 한 사람만 들어올 수 있음
  if (!isAuth) return <Navigate to="/" />;

  return (
    <div className='page'>
      <div className='container'>
        <h1>주문 히스토리</h1>
        <OrdersList />
      </div>
    </div>
  )
}

export default OrderPage