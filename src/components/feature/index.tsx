import React, { ReactNode } from 'react';
import { Container, Title, SubTitle } from './styles/feature';
import { CommonProps } from "@/type/type";

export default function Feature({ children, ...restProps }: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }: CommonProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
