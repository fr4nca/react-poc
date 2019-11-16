import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';
import { Content } from '../styles';
import { Link } from 'react-router-dom';
import { Button } from 'styles/global';

const SignIn: React.FC = () => {
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
      <img
        src="https://media-api.cloudez.io/dynamic/configr-login.png"
        alt="logo"
      ></img>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
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
        <Button type="submit">{loading ? 'Loading..' : 'Acessar'}</Button>
        <p>
          Não possui uma conta? <Link to="/register">Cadastrar</Link>
        </p>
        <p>
          Esqueceu sua senha? <Link to="/register">Recuperar</Link>
        </p>
      </form>
    </Content>
  );
};

export default SignIn;
