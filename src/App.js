import React, { useState } from "react";
import "./App.css";
import Grid from "./Grid";

const App = () => {
  const [gridSize] = useState({ rows: 15, cols: 20 });

  return (
    <div className="app-container">
      <h1>Wave Grid</h1>
      <Grid rows={gridSize.rows} cols={gridSize.cols} />
    </div>
  );
};

export default App;
