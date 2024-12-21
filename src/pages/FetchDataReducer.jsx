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

  function reducer(state, action) {
    if (action.type === 'Loading') {
      return { ...state, loading: true };
    } else if (action.type === 'Success') {
      return { ...state, loading: false, data: action.payload };
    } else if (action.type === 'Error') {
      return { ...state, loading: false, error: action.payload };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

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
      {state.loading && (
        <div className="flex h-screen justify-center items-center">
          <HashLoader />
        </div>
      )}
      <p>{JSON.stringify(state.data)}</p>
      <p>{state.error}</p>
    </div>
  );
}

export default FetchDataReducer;
