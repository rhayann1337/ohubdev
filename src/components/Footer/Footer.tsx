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
      <ContainerFooter>
        <FooterGrid>
          <FooterColumn>
            <a>Início</a>
            <a>Soluções</a>
            <a>Parceiros</a>
          </FooterColumn>
          <FooterColumn color="#FF5403">
            <a>(47) 99791-7737</a>
            <a>contato@ohubdev.com.br</a>
            <a>Santa Catarina — Brasil</a>
          </FooterColumn>
          <FooterColumn>
            <a>Instragram</a>
            <a>Linkedin</a>
            <a>Facebook</a>
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