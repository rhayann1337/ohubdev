import React from "react";
import { ohubFooter } from "../../assets";
import {
  FooterGrid,
  FooterColumn,
  FooterLastColumn,
  FooterIcon,
  ContainerFooter,
} from "./style";

export const Footer: React.FC = () => {
  return (
    <>
      <ContainerFooter id="Contact">
        <FooterGrid>
          <FooterColumn isPointerEnabled={true}>
            <a href="#Welcome">Início</a>
            <a href="#Solution">Soluções</a>
            <a href="#Partners">Parceiros</a>
          </FooterColumn>
          <FooterColumn color="#FF5403">
            <a>(47) 99791-7737</a>
            <a>contato@ohubdev.com.br</a>
            <a>Santa Catarina — Brasil</a>
          </FooterColumn>
          <FooterColumn isPointerEnabled={true}>
            <a onClick={() => window.open("https://instagram.com")}>
              Instagram
            </a>
            <a onClick={() => window.open("https://linkedin.com")}>Linkedin</a>
            <a onClick={() => window.open("https://facebook.com")}>Facebook</a>
          </FooterColumn>
          <FooterLastColumn>
            <a>Ohubdev® IT Services Ltda.</a>
            <a>All Rights Reserverd — 2023</a>
            <a>Made by Studio Typpe®.</a>
          </FooterLastColumn>
        </FooterGrid>
        <FooterIcon>
          <img alt="ohubfooter" src={ohubFooter} />
        </FooterIcon>
      </ContainerFooter>
    </>
  );
};
