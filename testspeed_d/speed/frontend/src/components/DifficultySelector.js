import React, { useState } from 'react';

const DifficultySelector = ({ onChange }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

  const handleDifficultyChange = (event) => {
    const selected = event.target.value;
    setSelectedDifficulty(selected);
    if (onChange) {
      onChange(selected); // Pass selected difficulty to parent component
    }
  };

  return (
    <div>
      {/* Your difficulty level selection UI */}
      <select value={selectedDifficulty} onChange={handleDifficultyChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultySelector;
