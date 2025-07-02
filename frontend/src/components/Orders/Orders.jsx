import React, { useState } from 'react';
import './Orders.css';

const mockOrder = {
  items: [
    { name: 'Greek salad', qty: 2 },
    { name: 'Peri Peri Rolls', qty: 3 }
  ],
  totalItems: 2,
  totalPrice: 65,
  customer: {
    name: 'Avinash Kumar',
    address: 'GreatStack, Whitefield, Bangalore, Karnataka, 560066, 560066',
    phone: '9876543210'
  },
  status: 'Food Processing'
};

const statusOptions = [
  'Food Processing',
  'Out for delivery',
  'Delivered'
];

const Orders = () => {
  const [status, setStatus] = useState(mockOrder.status);
  return (
    <div className="orders-page">
      <div className="orders-title">Order Page</div>
      <div className="orders-card">
        <div className="orders-card-row">
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046870.png" alt="box" className="orders-card-img" />
          <div className="orders-card-info">
            <div className="orders-card-items">
              <b>{mockOrder.items.map(i => `${i.name} x ${i.qty}`).join(', ')}</b>
            </div>
            <div className="orders-card-customer">
              <div><b>{mockOrder.customer.name}</b></div>
              <div>{mockOrder.customer.address}</div>
              <div>{mockOrder.customer.phone}</div>
            </div>
          </div>
          <div className="orders-card-meta">
            <div>Items: {mockOrder.totalItems}</div>
            <div>${mockOrder.totalPrice}</div>
            <select className="orders-status-select" value={status} onChange={e => setStatus(e.target.value)}>
              {statusOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
