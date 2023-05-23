import React from 'react';
import { CardButton, CardFieldset } from '../Login.styles';

export const LoginButton = () => {
  return (
    <CardFieldset>
      <CardButton type='submit'>Log In</CardButton>
    </CardFieldset>
  );
};
