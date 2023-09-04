"use client";

import React, { useState } from "react";
// import { Link as ReachRouterLink } from "react-router-dom";
import ReachRouterLink from "next/link";
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from "./styles/header";
import {
  CommonProps,
  HeaderProps,
  HeaderSearchProps,
  HeaderLogoProps,
  PictureProps
} from "@/type/type";
export default function Header({
  bg = true,
  children,
  ...restProps
}: HeaderProps) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}
Header.Frame = function HeaderFrame({ children, ...restProps }: CommonProps) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restProps }: CommonProps) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }: HeaderLogoProps) {
  return (
    <ReachRouterLink href={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}: HeaderSearchProps) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};
Header.Profile = function HeaderProfile({
  children,
  ...restProps
}: CommonProps) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Feature = function HeaderFeature({ children }: CommonProps) {
  return <Feature>{children}</Feature>;
};
Header.Picture = function HeaderPicture({
  src,
  ...restProps
}: PictureProps) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Dropdown = function HeaderDropdown({
  children,
  ...restProps
}: CommonProps) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.TextLink = function HeaderTextLink({
  children,
  ...restProps
}: CommonProps) {
  return <Link {...restProps}>{children}</Link>;
};
Header.PlayButton = function HeaderPlayButton({
  children,
  ...restProps
}: CommonProps) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}: CommonProps) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Text = function HeaderText({ children, ...restProps }: CommonProps) {
  return <Text {...restProps}>{children}</Text>;
};
Header.ButtonLink = function HeaderButtonLink({
  children,
  ...restProps
}: CommonProps) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
