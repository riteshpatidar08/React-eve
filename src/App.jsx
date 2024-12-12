import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="text"
          className="w-64 m-5 border border-black rounded-sm p-4"
        />
        <button
          className="px-8 py-2 rounded-md bg-green-400 text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
