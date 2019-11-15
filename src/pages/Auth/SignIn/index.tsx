import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../../store/modules/auth/actions';

const SingIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <input
        type="email"
        name="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Entrar</button>
    </>
  );
};
export default SingIn;
