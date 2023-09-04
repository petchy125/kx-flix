import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";
import { CommonProps } from "@/type/type";
export default function Footer({ children, ...restProps }: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
}
Footer.Row = function FooterRow({ children, ...restProps }: CommonProps) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Column = function FooterColumn({ children, ...restProps }: CommonProps) {
  return <Column {...restProps}>{children}</Column>;
};
Footer.Link = function FooterLink({ children, ...restProps }: CommonProps) {
  return <Link {...restProps}>{children}</Link>;
};
Footer.Title = function FooterTitle({ children, ...restProps }: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restProps }: CommonProps) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Break = function FooterBreak({ ...restProps }: CommonProps) {
  return <Break {...restProps} />;
};
