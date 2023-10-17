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
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  buttonText,
  children,
  isLeft = true,
  colorButton,
  onClick,
}) => {
  return (
    <ContainerCard isLeft={isLeft}>
      <ContainerInfo isLeft={isLeft}>
        <ContainerCenter isLeft={isLeft}>
          <Title>{title}</Title>
          <Subtitle isLeft={isLeft}>{subtitle}</Subtitle>
          <Button text={buttonText} color={colorButton} onClick={onClick} />
        </ContainerCenter>
      </ContainerInfo>
      <ContainerChildren isLeft={isLeft}>{children}</ContainerChildren>
    </ContainerCard>
  );
};
