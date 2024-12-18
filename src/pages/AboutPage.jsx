import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl m-6">Aboutpage</h1>
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
