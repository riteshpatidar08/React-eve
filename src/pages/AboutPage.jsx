import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
function AboutPage() {
  
const {name} = useContext(DataContext)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };


  return (
    <div>
      <h1 className="text-center font-semibold text-3xl m-6">{name}</h1>
      <button
        onClick={handleClick}
        className="px-8 py-2 font-semibold bg-red-500 hover:bg-red-400 rounded-full transition-all duration-200 text-white"
      >
      
        Back
      </button>
    </div>
  );
}

export default AboutPage;
