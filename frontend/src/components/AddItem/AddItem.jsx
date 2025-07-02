import React, { useState } from 'react';
import './AddItem.css';

const AddItem = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('Salad');
  const [price, setPrice] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
  };

  return (
    <div className="additem-page">
      <form className="additem-form" onSubmit={handleSubmit}>
        <label className="additem-label">Upload image</label>
        <div className="additem-upload-box">
          <label htmlFor="additem-upload-input" className="additem-upload-label">
            {image ? (
              <img src={image} alt="Preview" className="additem-upload-preview" />
            ) : (
              <>
                <div className="additem-upload-icon">☁️</div>
                <div className="additem-upload-text">Upload</div>
              </>
            )}
            <input id="additem-upload-input" type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
        </div>
        <label className="additem-label">Product name</label>
        <input className="additem-input" type="text" placeholder="Type here" value={name} onChange={e => setName(e.target.value)} />
        <label className="additem-label">Product description</label>
        <textarea className="additem-textarea" placeholder="Write content here" value={desc} onChange={e => setDesc(e.target.value)} />
        <div className="additem-row">
          <div className="additem-col">
            <label className="additem-label">Product category</label>
            <select className="additem-select" value={category} onChange={e => setCategory(e.target.value)}>
              <option>Salad</option>
              <option>Rolls</option>
              <option>Deserts</option>
              <option>Sandwich</option>
              <option>Cake</option>
              <option>Appetizers</option>
              <option>Pasta</option>
            </select>
          </div>
          <div className="additem-col">
            <label className="additem-label">Product Price</label>
            <input className="additem-input" type="text" placeholder="$25" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
        <button className="additem-submit" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddItem;
