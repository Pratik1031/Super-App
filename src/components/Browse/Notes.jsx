import React, { useState } from 'react';
import Styles from './Notes.module.css';

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem('text'))
  );
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem('text', JSON.stringify(text));
  };
  return (
    <div className={Styles.notes}>
      <p>All notes</p>
      <textarea
        className={Styles.textSection}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Notes;
