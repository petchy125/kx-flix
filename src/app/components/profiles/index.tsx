import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';
import { CommonProps, PictureProps } from '@/type/type';
export default function Profiles({ children, ...restProps }: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
}
Profiles.Title = function ProfilesTitle({ children, ...restProps }: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};2
Profiles.List = function ProfilesList({ children, ...restProps }: CommonProps) {
  return <List {...restProps}>{children}</List>;
};
Profiles.User = function ProfilesUser({ children, ...restProps }: CommonProps) {
  return <Item {...restProps}>{children}</Item>;
};
Profiles.Picture = function ProfilesPicture({ src, ...restProps }: PictureProps) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};
Profiles.Name = function ProfilesName({ children, ...restProps }: CommonProps) {
  return <Name {...restProps}>{children}</Name>;
};
