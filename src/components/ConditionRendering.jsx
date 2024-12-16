import { useState } from 'react';

const ConditionalRendering = () => {
  const [login, setLogin] = useState(false);
  //if else
  //    if(login){
  //     return <h1>Welcome user</h1>
  //    }else {
  //    return <h1>User is not logged in , please login</h1>
  //    }
  const handleClick = () => {
    setLogin(!login);
  };
  //ternary operator
  return (
    <div>
      {login ? <h1>welcome</h1> : <h1>please login</h1>}
      <button onClick={handleClick} className="px-8 py-2 bg-red-500 text-white">
        {login ? 'Log out' : 'Log In'}
      </button>
    </div>
  );
};

export default ConditionalRendering;
