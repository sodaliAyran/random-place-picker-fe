// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchChoices } from './api';

const App = () => {
  const [choices, setChoices] = useState(null);

  useEffect(() => {
    const getChoices = async () => {
      try {
        const data = await fetchChoices();
        setChoices(data);
      } catch (error) {
        console.error('Error loading data', error);
      }
    };

    getChoices();
  }, []);

  return (
    <div className="App">
      {choices ? (
        <>
          <h1>{choices.gathering_time}</h1>

          {choices.final_place ? (
            <div className="final-place">
              <h2>{choices.final_place}</h2>
            </div>
          ) : (
            <div className="places-list">
              {choices.places.map((place, index) => (
                <div key={index} className="place">
                  <h3>{place}</h3>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
