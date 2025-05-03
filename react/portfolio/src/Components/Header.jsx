import react from 'react';

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 h-20 sticky top-0 bg-black dark:bg-white shadow-md">
      <h1 className="text-xl font-bold text-white dark:text-black">Shrutika</h1>
      <button onClick={toggleDarkMode} className="text-black dark:text-white">
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Header;

