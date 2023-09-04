import React from "react";
import { Container, Input, Break, Button, Text } from "./styles/opt-form";
import { CommonProps } from "@/type/type";
export default function OptForm({ children, ...restProps }: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
}
OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};
OptForm.Button = function OptFormButton({ children, ...restProps }: CommonProps) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};
OptForm.Text = function OptFormText({ children, ...restProps }: CommonProps) {
  return <Text {...restProps}>{children}</Text>;
};
OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
