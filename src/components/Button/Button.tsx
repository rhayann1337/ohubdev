import React from "react";
import { ContainerButton } from "./style";

interface ButtonProps {
  text: string;
  largeButton?: boolean;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  largeButton = true,
  color,
}) => {
  return (
    <ContainerButton largeButton={largeButton} color={color}>
      <p>{text}</p>
    </ContainerButton>
  );
};
