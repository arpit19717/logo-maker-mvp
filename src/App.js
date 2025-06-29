import React, { useState } from 'react';

const fonts = ['Arial', 'Georgia', 'Courier New', 'Verdana'];
const colors = ['#000000', '#FF5733', '#33C3FF', '#28a745'];

export default function App() {
  const [brandName, setBrandName] = useState('');
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Logo Maker</h1>
      <input
        type="text"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        placeholder="Enter brand name"
        className="p-2 border border-gray-300 rounded mb-4 w-full max-w-md"
      />
      <div className="flex gap-4 mb-4">
        <select onChange={(e) => setSelectedFont(e.target.value)} value={selectedFont}>
          {fonts.map(font => <option key={font} value={font}>{font}</option>)}
        </select>
        <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
          {colors.map(color => <option key={color} value={color}>{color}</option>)}
        </select>
      </div>
      <div className="mt-6 p-6 border rounded shadow bg-white">
        <h2 style={{ fontFamily: selectedFont, color: selectedColor, fontSize: '32px' }}>
          {brandName || 'Your Logo'}
        </h2>
      </div>
    </div>
  );
}
