import React from "react";
import CloudIcon from "../../assets/cloud_icon.svg";
import { Button } from "../Button/Button";
import { ContainerBox, ContainerInfo, SubTitle, Title } from "./style";

export const Box: React.FC = () => {
  return (
    <ContainerBox>
      <ContainerInfo>
        <Title>Conheça a Ohubdev!</Title>
        <SubTitle>
          Somos um hub de desenvolvimento com o propósito de conectar ideias e
          pessoas.
        </SubTitle>
        <Button
          color="#FF5403"
          text="Descubra mais!"
          onClick={() => window.open("https://whatsapp.com")}
        />
      </ContainerInfo>
      <img src={CloudIcon} alt="Cloud Icon" />
    </ContainerBox>
  );
};
