import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const feedbackRef = useRef();

  console.log(nameRef);

  console.dir(nameRef.current);

  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input ref={nameRef} className="btn" type="text" />
        <label>email</label>
        <input ref={emailRef} className="btn" type="email" />
        <label>Tutor feedback</label>
        <input ref={feedbackRef} className="btn" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
