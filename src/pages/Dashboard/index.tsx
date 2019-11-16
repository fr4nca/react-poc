import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Content } from './styles';
import { Button } from '../../styles/global';
import { signOut } from '../../store/modules/auth/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }: any) => user.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Content>
      <div style={{ fontSize: 40 }}>Salve {user.full_name}</div>
      <Button onClick={handleSignOut}>Sair</Button>
    </Content>
  );
};

export default Dashboard;
