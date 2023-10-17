import React from "react";
import { ContainerButton } from "./style";

interface ButtonProps {
  text: string;
  largeButton?: boolean;
  color?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  largeButton = true,
  color,
  onClick,
}) => {
  return (
    <ContainerButton largeButton={largeButton} color={color} onClick={onClick}>
      <p>{text}</p>
    </ContainerButton>
  );
};
