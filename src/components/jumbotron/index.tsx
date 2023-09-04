import React from "react";
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";
import { CommonProps, JumbotronProps } from "@/type/type";
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}: JumbotronProps) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}
Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: CommonProps) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: CommonProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
