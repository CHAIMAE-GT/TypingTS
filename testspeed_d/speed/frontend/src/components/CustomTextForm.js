// CustomTextForm.js

import React, { useState } from 'react';
import { createCustomText } from '../services/api';
import { useHistory } from 'react-router-dom';

const CustomTextForm = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomText({ text });
      // Redirect user to custom texts list after saving
      history.push('/custom-texts');
    } catch (error) {
      setError('Failed to save custom text');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={handleTextChange} />
      {error && <div>{error}</div>}
      <button type="submit">Save</button>
    </form>
  );
};

export default CustomTextForm;
