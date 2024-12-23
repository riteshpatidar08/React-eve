import React, { useState } from 'react';

function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  console.log(data);

  return (
    <div className="max-w-lg mt-10 mx-auto p-5 bg-gray-200">
      <form>
        <label htmlFor="login">Email</label>
        <input
          onChange={handleChange}
          type="text"
          id="login"
          name="email"
          value={data.email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          value={data.password}
        />
        <button className="px-8 py-2 bg-red-500 text-white" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
