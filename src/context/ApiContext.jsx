import { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [starWars, setStarWars] = useState([]);

  useEffect(() => {
    console.log(starWars);

    const fetchJokes = async () => {
      const data = await axios.get('https://swapi.py4e.com/api/people/1/');
      setStarWars(data.data);
    };

    fetchJokes();
  }, []);

  return <ApiContext.Provider value={{starWars,setStarWars}}>
    {children}</ApiContext.Provider>;
};
