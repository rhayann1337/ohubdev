import React from "react";
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
  ContainerPartnersGrid,
  GridContainer,
  NewsContainer,
  GridNews,
  TextNews,
  TalkButton,
  TalkTitle,
  ContainerTalk,
  Footer,
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

import ImperialPet from "../../assets/imperialpet_icon.svg";
import Epay from "../../assets/epays_icon.svg";
import GroupBc from "../../assets/grupobc_icon.svg";
import MyClub from "../../assets/meuclub_icon.svg";
import PP from "../../assets/portasp_icon.svg";
import Invol from "../../assets/invol_icon.svg";
import PenseViva from "../../assets/penseviva_icon.svg";
import Employer from "../../assets/penseviva_icon.svg";
import Type from "../../assets/typpe_icon.svg";
import Hangar from "../../assets/hangar2_icon.svg";
import Hills from "../../assets/hills2_icon.svg";

import News1 from "../../assets/news1.svg";
import News2 from "../../assets/news2.svg";
import News3 from "../../assets/news3.svg";
import News4 from "../../assets/news4.svg";
import News5 from "../../assets/news5.svg";
import { Header } from "../../components/Header/Header";

const partners = [
  ImperialPet,
  Epay,
  GroupBc,
  MyClub,
  PP,
  Invol,
  PenseViva,
  Employer,
  Type,
  Hangar,
  Hills,
];

const news = [News1, News2, News3, News4, News5];

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
        <ContainerPartnersGrid>
          <SwiperTitle>Clientes & Parceiros Ohub </SwiperTitle>
          <SwiperSubtitle>
            Clientes que caminham conosco e diversas emSwiperSubtitleresas que
            fazem parte do nosso projeto!
          </SwiperSubtitle>
          <GridContainer>
            {partners.map((partner) => (
              <img alt="partners" src={partner} />
            ))}
          </GridContainer>
        </ContainerPartnersGrid>
        <NewsContainer>
          <TextNews>
            <SwiperSubtitle>
              Veja as nossas novidades no Instagram
            </SwiperSubtitle>
            <p>@ohubdev</p>
          </TextNews>
          <GridNews>
            {news.map((item) => (
              <img alt="news" src={item} />
            ))}
          </GridNews>
        </NewsContainer>
        <ContainerTalk>
          <TalkTitle>Vamos conversar?</TalkTitle>
          <TalkButton>
            <p>Iniciar projeto</p>
          </TalkButton>
        </ContainerTalk>
        <Footer></Footer>
      </ContainerBody>
    </Container>
  );
};
