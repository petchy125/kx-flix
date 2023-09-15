import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';
import { PictureProps } from '@/type/type';
export default function Loading({ src, ...restProps }:PictureProps) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}
Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
