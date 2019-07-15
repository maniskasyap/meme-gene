import React from 'react';

export const CaptionForm = ({ item, onHandleSubmit }) => {
  let value1, value2, value3, value4;
  const handleValue1 = e => {
    value1 = e.target.value;
  };
  const handleValue2 = e => {
    value2 = e.target.value;
  };
  const handleValue3 = e => {
    value3 = e.target.value;
  };
  const handleValue4 = e => {
    value4 = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    onHandleSubmit({ item: item, texts: [value1, value2, value3, value4] });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value1}
        placeholder="Enter first caption..."
        onChange={handleValue1}
      />
      <input
        type="text"
        value={value2}
        placeholder="Enter second caption..."
        onChange={handleValue2}
      />
      <input
        type="text"
        value={value3}
        placeholder="Enter third caption..."
        onChange={handleValue3}
      />
      <input
        type="text"
        value={value4}
        placeholder="Enter fourth caption..."
        onChange={handleValue4}
      />
      <input type="submit" value="Create Meme" />
    </form>
  );
};
