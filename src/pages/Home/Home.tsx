import React from "react";
import {
  Container,
  ContainerAvatar,
  ContainerBody,
  ContainerWhatsapp,
} from "./style";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { AvatarCris, AvatarThiago, WhatsappIcon } from "../../assets";

import {
  Header,
  Cards,
  Box,
  AvatarCard,
  Carousel,
  DescriptionWithImage,
  Footer,
  News,
  Partners,
  Talk,
  Welcome,
} from "../../components";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <Welcome />
        <Cards />
        <Carousel />
        <DescriptionWithImage />
        <Box />
        <ContainerAvatar>
          <AvatarCard
            title="E aí, eu sou o "
            avatarName="Thiago!"
            subtitle="Há 17 anos entregando soluções inteligente para o seu negócio. Arquiteto de softwares e CEO da Ohub, sou o cérebro da equipe, lógica é comigo mesmo!"
            question="Existe algo te impedindo? Tenho a solução"
            avatarUrl={AvatarThiago}
          />
          <AvatarCard
            title="E aí, eu sou a "
            avatarName="Cris!"
            subtitle="Responsável pela área de projetos da Ohub, construo a ponte entre nós e você conectando as suas ideias aos nossos devs. Com certeza você terá contato comigo!"
            question="Vamos tirar o seu projeto do papel?"
            avatarUrl={AvatarCris}
            isBlue={false}
          />
        </ContainerAvatar>
        <Partners />
        <News />
        <Talk />
        <Footer />
        <ContainerWhatsapp>
          <img alt="ohubdev" src={WhatsappIcon} />
        </ContainerWhatsapp>
      </ContainerBody>
    </Container>
  );
};
