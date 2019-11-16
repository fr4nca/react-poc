import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';
import { Content } from '../styles';
import { Link } from 'react-router-dom';
import { Button } from 'styles/global';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading: any = useSelector(({ auth }: any) => auth.loading);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  };

  return (
    <Content>
      <img
        src="https://media-api.cloudez.io/dynamic/configr-login.png"
        alt="logo"
      ></img>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button type="submit">{loading ? 'Loading..' : 'Registrar'}</Button>
        <p>
          Já possui uma conta? <Link to="/">Acessar</Link>
        </p>
      </form>
    </Content>
  );
};

export default SignUp;
