import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../../store/modules/auth/actions';
import { Content } from './styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const loading: any = useSelector(({ auth }: any) => auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  };

  return (
    <Content>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">{loading ? 'Loading..' : 'Acessar'}</button>
      </form>
    </Content>
  );
};

export default SignIn;
