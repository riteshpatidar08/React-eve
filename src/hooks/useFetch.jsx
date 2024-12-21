// const [data,error ,loading ]=useFetcher('apuurl')

import React, { useEffect, useState } from 'react';
import axios from 'axios';
function useFetch(url) {
  console.log(url);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(data);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await axios.get(url);
        console.log(data);
        setData(data.data);
        setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return [data, loading];
}

export default useFetch;
