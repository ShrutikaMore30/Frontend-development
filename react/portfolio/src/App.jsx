import { useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home'; 
import Icons from './Components/Icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen  bg-[#f5f5f5] dark:bg-[#1f1f1f] dark:text-white transition duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <Icons/>
        
      </div>
    </div>
  );
}

export default App;
