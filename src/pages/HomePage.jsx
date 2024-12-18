import { useNavigate } from 'react-router-dom';

function HomePage() {
  //Programatically navigation
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className="ml-4">
      <h1 className='text-center font-semibold text-3xl m-6'> Homepage</h1>
      <button onClick={handleClick} className="px-8 py-2 font-semibold bg-red-500 hover:bg-red-400 rounded-full transition-all duration-200 text-white">
        About
      </button>
    </div>
  );
}

export default HomePage;
