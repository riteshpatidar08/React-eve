import React from 'react';
import { useReducer, useState } from 'react';
import Button from '../ui/Button';
function UserReducerPage() {
  // const [count,setCount] = useState(0) ;

  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'increment') {
      return { count: state.count + 1 };
    } else if (action.type === 'decrement') {
      return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const buttonData = [
    { title: 'Increment', class: 'bg-red-500' },
    { title: 'Decrement', class: 'bg-green-500' },
    { title: 'reset', class: 'bg-orange-500' },
  ];

  return (
    <div className="flex gap-4">
      <p className="text-5xl">{state.count}</p>
      {/* {buttonData.map((data) => (
        <Button class={data.class} title={data.title} />
      ))} */}
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </div>
  );
}

export default UserReducerPage;
