// src/ToggleButton.js
import React, { useState } from 'react';

function ToggleButton() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <label className="inline-flex items-center mb-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleToggle}
      />
      <div
        className={`relative w-9 h-5 ${checked ? 'bg-gray-700' : 'bg-white'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700`}
      ></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
    </label>
  );
}

export default ToggleButton;
