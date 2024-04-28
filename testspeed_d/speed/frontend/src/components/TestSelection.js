// TestSelection.js

import React from 'react';
import DifficultySelector from './DifficultySelector';

const TestSelection = () => {
  const handleDifficultyChange = (selectedDifficulty) => {
    console.log('Selected difficulty:', selectedDifficulty);
    // You can perform any additional actions here, such as passing the selected difficulty to TypingTest component
  };

  return (
    <div>
      <h2>Test Selection</h2>
      <DifficultySelector onChange={handleDifficultyChange} />
      {/* Other components for selecting test options */}
    </div>
  );
};

export default TestSelection;
