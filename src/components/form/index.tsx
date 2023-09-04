import React from 'react';
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form';
import { CommonProps } from "@/type/type";

export default function Form({ children, ...restProps }: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }: CommonProps) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }: CommonProps) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: CommonProps) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({
  children,
  ...restProps
}: CommonProps) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }: CommonProps) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }: CommonProps) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }: CommonProps) {
  return <Submit {...restProps}>{children}</Submit>;
};
