"use client";

import React, { useState, useContext, createContext, ReactNode,SetStateAction } from "react";
import { Container, Frame, Title, Item, Inner, Header, Body } from "./styles/accordion";
import { CommonProps } from "@/type/type";

// Define the context type
interface ToggleContextType {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<SetStateAction<boolean>>;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);


export default function Accordion({ children, ...restProps }: CommonProps) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }: CommonProps) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }: CommonProps) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }: CommonProps) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext) as ToggleContextType;
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }: CommonProps) {
  const { toggleShow } = useContext(ToggleContext) as ToggleContextType;
  return (
    <Body className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
