import React from "react";
import {
  ContainerHeader,
  ContainerLogo,
  ContainerButtons,
  ContainerSocial,
} from "./style";
import logo from "../../assets/logo.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <img alt="Logo" src={logo} />
      </ContainerLogo>
      <ContainerButtons>
        <p>Soluções</p>
        <p>Sobre</p>
        <p>Clientes</p>
        <p>Contato</p>
      </ContainerButtons>
      <ContainerSocial>
        <img
          alt="Instagram"
          src={instagramIcon}
          onClick={() => window.open("https://instagram.com")}
        />

        <img
          alt="Facebook"
          src={facebookIcon}
          onClick={() => window.open("https://facebook.com")}
        />
        <img
          alt="Linkedin"
          src={linkedinIcon}
          onClick={() => window.open("https://linkedin.com")}
        />
      </ContainerSocial>
    </ContainerHeader>
  );
};
