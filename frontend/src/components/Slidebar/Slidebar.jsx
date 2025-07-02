import React from 'react';
import './Slidebar.css';
import { useNavigate } from 'react-router-dom';

const Slidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const handleAddItem = () => {
    onClose();
    navigate('/add-item');
  };
  const handleOrders = () => {
    onClose();
    navigate('/orders');
  };
  return (
    <>
      <div className={`slidebar-overlay${open ? ' open' : ''}`} onClick={onClose}></div>
      <div className={`slidebar slidebar-right${open ? ' open' : ''}`}>
        <button className="slidebar-btn" onClick={handleAddItem}><span>＋</span> Add Items</button>
        <button className="slidebar-btn"><span>☑</span> List Items</button>
        <button className="slidebar-btn" onClick={handleOrders}><span>☑</span> Orders</button>
      </div>
    </>
  );
};

export default Slidebar;
