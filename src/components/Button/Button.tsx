import React from "react";
import { ContainerButton } from "./style";

interface ButtonProps {
  text: string;
  largeButton?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, largeButton = true }) => {
  return (
    <ContainerButton largeButton={largeButton}>
      <p>{text}</p>
    </ContainerButton>
  );
};
