import { ContainerCard, Title, ContainerChildren } from "./style";

interface CardTechProps {
  title: string;
  children?: React.ReactNode;
}

export const CardTech: React.FC<CardTechProps> = ({ title, children }) => {
  return (
    <ContainerCard>
      <ContainerChildren>{children}</ContainerChildren>
      <Title>{title}</Title>
    </ContainerCard>
  );
};
