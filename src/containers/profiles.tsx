import React from 'react';
import { Header, Profiles } from '../app/components';
import * as ROUTES from '../constants/routes';
// import logo from '../logo.svg';
export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={'/images/logo.svg'} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: 'Test', photoURL: '/images/logo.svg' })}
            data-testid="user-profile"
          >
            <Profiles.Picture src={'1'} />
            <Profiles.Name>{'Test'}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
