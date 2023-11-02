import React, { useState, useEffect } from 'react';

const Cards = ({ data, setCategories, categories }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(categories.includes(data.id));
  }, [categories, data.id]);

  const handleClick = () => {
    if (selected) {
      const updatedCategories = categories.filter(
        (category) => category !== data.id
      );
      setCategories(updatedCategories);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        background: data.color,
        color: 'white',
        padding: '16px',
        borderRadius: '12px',
        border: `${selected ? '4px solid green' : '4px solid white'}`,
        cursor: 'pointer',
      }}
    >
      <p style={{ marginBottom: '4px', fontSize: '18px' }}>{data.id}</p>
      <img
        src={data.image}
        alt={data.id}
        style={{ width: '160px', height: '120px' }}
      />
      {/* {data.image} */}
    </div>
  );
};

export default Cards;
