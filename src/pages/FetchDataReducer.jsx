import axios from 'axios';
import React, { useReducer, useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
function FetchDataReducer() {
  //    const [data ,setData] = useState([]);
  //    const [loading , setLoading] = useState(false)
  //    const [error , setError] = useState(null)

  const initialState = {
    loading: false,
    data: null,
    error: null,
  };

  //1st case
  //   return {data:null,error:null , loading:true}
  //  return {error:null, loading:false ,data:[]}

  function reducer(prevState, action) {
    if (action.type === 'Loading') {
      return { ...prevState, loading: true };
    } else if (action.type === 'Success') {
      return { ...prevState, loading: false, data: action.payload };
    } else if (action.type === 'Error') {
      return { ...prevState, loading: false, error: action.payload };
    }
  }

  const [currentState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'Loading' });
      try {
        const data = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        dispatch({ type: 'Success', payload: data.data });
      } catch (error) {
        dispatch({ type: 'Error', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {currentState.loading && (
        <div className="flex h-screen justify-center items-center">
          <HashLoader />
        </div>
      )}
      <p>{JSON.stringify(currentState.data)}</p>
      <p>{currentState.error}</p>
    </div>
  );
}

export default FetchDataReducer;
