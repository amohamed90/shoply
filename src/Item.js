import React from 'react';
import './Item.css';


function Item({ id, value, add, remove }) {

  const handleAdd = () => {
    add({ ...value, id });
  }

  const handleRemove = () => {
    remove({ id });
  }

  return (
      <div>
        <img src={value.image_url} alt={value.name} />
        <p>{value.description}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    
  )
}

export default Item