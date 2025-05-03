import React, { useState } from "react";
import Game from "./components/Game";

function App() {
  const [mode, setMode] = useState(null); // Initially, no mode selected

  const handleBack = () => {
    setMode(null); // Reset to mode selection
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {!mode ? (
        // Mode Selection Page
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Choose Game Mode</h1>
          <div className="flex gap-4 justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl text-lg"
              onClick={() => setMode("pvp")} // Player vs Player Mode
            >
              Player vs Player
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg"
              onClick={() => setMode("ai")} // Player vs Computer Mode
            >
              Player vs Computer
            </button>
          </div>
        </div>
      ) : (
        // Game Component with selected mode
        <Game mode={mode} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
