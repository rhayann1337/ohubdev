import { Button } from "../Button/Button";
import {
  ContainerCard,
  ContainerInfo,
  Title,
  Subtitle,
  ContainerChildren,
  ContainerCenter,
} from "./style";

interface CardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  children?: React.ReactNode;
  isLeft?: boolean;
  colorButton?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  buttonText,
  children,
  isLeft = true,
  colorButton,
}) => {
  return (
    <ContainerCard isLeft={isLeft}>
      <ContainerInfo isLeft={isLeft}>
        <ContainerCenter isLeft={isLeft}>
          <Title>{title}</Title>
          <Subtitle isLeft={isLeft}>{subtitle}</Subtitle>
          <Button text={buttonText} color={colorButton} />
        </ContainerCenter>
      </ContainerInfo>
      <ContainerChildren isLeft={isLeft}>{children}</ContainerChildren>
    </ContainerCard>
  );
};
