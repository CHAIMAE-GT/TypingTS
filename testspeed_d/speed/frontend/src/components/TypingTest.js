// TypingTest.js

import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

const TypingTest = () => {
    const [inputText, setInputText] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [testData, setTestData] = useState(null);

    useEffect(() => {
        // Fetch test data when the component mounts
        fetchTestData();
    }, []);

    const fetchTestData = async () => {
        try {
            const data = await fetchData();
            setTestData(data);
        } catch (error) {
            // Handle error
        }
    };

    const handleInputChange = (e) => {
        const text = e.target.value;
        if (!startTime) {
            setStartTime(Date.now()); // Start the timer when the user starts typing
        }
        setInputText(text);
    };

    const handleTestComplete = () => {
        const endTime = Date.now();
        const timeElapsed = (endTime - startTime) / 1000; // Time in seconds
        const wordsTyped = inputText.split(' ').length;
        const wpm = Math.round((wordsTyped / timeElapsed) * 60);
        // Calculate accuracy and other metrics
    };

    return (
        <div>
            <textarea value={inputText} onChange={handleInputChange} />
            {/* Display test instructions or data */}
            <button onClick={handleTestComplete}>Complete Test</button>
        </div>
    );
};

export default TypingTest;
