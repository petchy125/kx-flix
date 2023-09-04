import { ReactNode } from 'react';

export interface CommonProps {
    children: ReactNode;
}
// Header section
export interface HeaderProps extends CommonProps{
    bg: boolean;
}

export interface HeaderSearchProps {
    searchTerm: string;
    setSearchTerm: Function;
}

export interface HeaderLogoProps {
    to: string;
}

export interface PictureProps {
    src: string;
}
// jumbotron section

export interface JumbotronProps extends CommonProps{
    direction: string;
}

