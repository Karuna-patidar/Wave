import React, { useState, useEffect } from "react";
import "./App.css";

const Grid = ({ rows, cols }) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [color, setColor] = useState("#1e90ff");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % cols;
        if (nextIndex === 0) {
          setColor(generateRandomColor());
        }
        return nextIndex;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [cols]);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const isActive = Math.abs(activeIndex - j) <= 1;
        row.push(
          <div
            key={`${i}-${j}`}
            className={`grid-cell ${isActive ? "active" : ""}`}
            style={isActive ? { backgroundColor: color } : {}}
          ></div>
        );
      }
      grid.push(
        <div key={i} className="grid-row">
          {row}
        </div>
      );
    }
    return grid;
  };

  return <div className="grid-container">{generateGrid()}</div>;
};

export default Grid;
