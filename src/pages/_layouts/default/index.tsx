import React from 'react';

import { Wrapper } from './styles';

const DefaultLayout: React.FC = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

export default DefaultLayout;
