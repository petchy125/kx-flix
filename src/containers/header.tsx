import React from 'react';
import { Header } from '../app/components';
import * as ROUTES from '../constants/routes';
// import logo from '../logo.svg';
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={'/images/logo.svg'} alt="Netflix" />
        <Header.ButtonLink href={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
