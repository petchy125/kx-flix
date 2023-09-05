"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, createUserWithEmailAndPassword } from '@/lib/firebase';
import { Form } from '@/components';
import { HeaderContainer } from '@/containers/header';
import { FooterContainer } from '@/containers/footer';
import * as ROUTES from '@/constants/routes';
export default function SignUp() {
  const history = useRouter();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  
  const handleSignup = async (event: React.FormEvent) => { // Make handleSignup asynchronous
    event.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, emailAddress, password);
      // await result.user?.updateProfile({
      //   displayName: firstName,
      //   photoURL: `${Math.floor(Math.random() * 5) + 1}`,
      // });
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      // setError(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link href="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}