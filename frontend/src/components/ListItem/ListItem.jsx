import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './ListItem.css';

const ListItem = () => {
  const { food_list, deleteFoodItem } = useContext(StoreContext);

  return (
    <div className="list-item-admin-page">
      <h2>All Foods List</h2>
      <table className="admin-food-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteFoodItem(item.id)}>
                  &#10005;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
