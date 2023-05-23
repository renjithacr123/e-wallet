import React, { useState } from 'react';
import { CardFieldset, CardInput } from '../Login.styles';

export const LoginFieldSets = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <CardFieldset>
        <CardInput
          id='username'
          placeholder='E-mail'
          type='text'
          onChange={onChangeUsername}
          value={username}
          required
        />
      </CardFieldset>

      <CardFieldset>
        <CardInput
          placeholder='Password'
          type='password'
          onChange={onChangePassword}
          value={password}
          required
        />
      </CardFieldset>
    </>
  );
};
