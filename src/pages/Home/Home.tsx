import React from "react";
import { Header } from "../../components/Header/header";
import {
  Container,
  ContainerAvatar,
  ContainerBody,
  ContainerDescription,
  ContainerMainContent,
  ContainerSwiper,
  Content,
  CustomSwiper,
  Description,
  DescriptionFirstText,
  DescriptionSecondText,
  SwiperSubtitle,
  SwiperTitle,
} from "./style";
import lamp from "../../assets/lamp.svg";
import ohubdevdesc from "../../assets/ohubdev-desc.svg";
import microsoftLogo from "../../assets/microsoft-logo.svg";
import { Button } from "../../components/Button/Button";
import { Cards } from "../../components/Cards/Cards";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { CardTech } from "../../components/CardTech/CardTech";
import { techList } from "../../utils/techInfos";
import VetorImage from "../../assets/vetor_respiro.svg";
import { Box } from "../../components/Box/Box";
import { AvatarCard } from "../../components/AvatarCard/AvatarCard";
import AvatarThiago from "../../assets/avatarIcon1.svg";
import AvatarCris from "../../assets/avatarIcon2.svg";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <ContainerMainContent>
          <Content>
            <Description>
              <img alt="ohubdev" src={ohubdevdesc} />
              <Button text="Iniciar projeto" />
            </Description>
            <img alt="lamp" src={lamp} />
          </Content>
          <img alt="microsoftLogo" src={microsoftLogo} />
        </ContainerMainContent>
        <Cards />
        <ContainerSwiper>
          <SwiperTitle>Sempre com as melhores ferramentas</SwiperTitle>
          <SwiperSubtitle>
            Buscando as novidades do mercado, nossas soluções são construídas
            com o que será o melhor para a sua necessidade.
          </SwiperSubtitle>
          <CustomSwiper slidesPerView={4.5} spaceBetween={16}>
            {techList.map((item: any, index) => (
              <SwiperSlide key={index}>
                <CardTech title={item.title}>
                  <img alt={item.title} src={item.imgSrc} />
                </CardTech>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </ContainerSwiper>
        <ContainerDescription>
          <DescriptionFirstText>
            Somos um <span>hub</span> de desenvolvimento! Focados em solucionar
          </DescriptionFirstText>
          <DescriptionSecondText>
            problemas e propagar ideias para todo o tipo de negócio!
          </DescriptionSecondText>
        </ContainerDescription>
        <img alt="DescriptionImage" src={VetorImage} />
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
      </ContainerBody>
    </Container>
  );
};
