// CustomTextList.js

import React, { useState, useEffect } from 'react';
import { getCustomTexts } from '../services/api';
import { Link } from 'react-router-dom';

const CustomTextList = () => {
  const [customTexts, setCustomTexts] = useState([]);

  useEffect(() => {
    const fetchCustomTexts = async () => {
      try {
        const data = await getCustomTexts();
        setCustomTexts(data);
      } catch (error) {
        // Handle error
      }
    };
    fetchCustomTexts();
  }, []);

  return (
    <div>
      <h2>Custom Texts</h2>
      <ul>
        {customTexts.map((text) => (
          <li key={text.id}>{text.text}</li>
        ))}
      </ul>
      <Link to="/custom-texts/new">Add New Custom Text</Link>
    </div>
  );
};

export default CustomTextList;
