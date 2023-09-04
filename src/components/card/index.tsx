import React, { useState, useContext, createContext, ReactNode } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from "./styles/card";
import { CommonProps } from "@/type/type";

// Define the context type
interface FeatureContextType {
  showFeature: boolean;
  setShowFeature: React.Dispatch<React.SetStateAction<boolean>>;
  itemFeature: {
    genre: string;
    slug?: string;
    title?: string;
    description?: string;
    maturity: number;
  };
  setItemFeature: React.Dispatch<React.SetStateAction<any>>;
}

export const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

interface CardItemProps {
  item: {
    genre?: string;
    slug?: string;
    title?: string;
    description?: string;
    maturity?: number;
  };
  children: ReactNode;
}

interface CardImageProps {
  // Add any specific props for CardImage here if needed
}

interface CardFeatureProps {
  children: ReactNode;
  category: string;
}

export default function Card({ children, ...restProps }: CommonProps) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }: CommonProps) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }: CommonProps) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }: CommonProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }: CommonProps) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }: CommonProps) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }: CommonProps) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }: CardItemProps) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext) as FeatureContextType;
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }: CardImageProps) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }: CardFeatureProps) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext) as FeatureContextType;
  return showFeature ? (
    <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre?.charAt(0).toUpperCase() + itemFeature.genre?.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
