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
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  buttonText,
  children,
  isLeft = true,
}) => {
  return (
    <ContainerCard>
      <ContainerInfo isLeft={isLeft}>
        <ContainerCenter isLeft={isLeft}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Button text={buttonText} />
        </ContainerCenter>
        <ContainerChildren isLeft={isLeft}>{children}</ContainerChildren>
      </ContainerInfo>
    </ContainerCard>
  );
};
