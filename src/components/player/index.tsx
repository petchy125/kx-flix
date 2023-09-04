"use client";

import React, { useState, useContext, createContext, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";
import { CommonProps } from "@/type/type";

// Define the context type
interface PlayerContextType {
  showPlayer: boolean;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

interface PlayerProps {
  children: ReactNode;
}

interface PlayerVideoProps {
  src: string;
  // Add any other specific props for PlayerVideo here if needed
}

export default function Player({ children, ...restProps }: PlayerProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }: PlayerVideoProps) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext) as PlayerContextType;

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext) as PlayerContextType;

  return (
    <Button onClick={() => setShowPlayer((prevShowPlayer) => !prevShowPlayer)} {...restProps}>
      Play
    </Button>
  );
};
