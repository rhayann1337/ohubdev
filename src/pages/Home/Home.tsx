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
  FooterGrid,
  FooterLastColumn,
  FooterColumn,
  FooterIcon,
  ContainerSubtitle,
} from "./style";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";

import {
  ArrowRight,
  AvatarCris,
  AvatarThiago,
  VetorImage,
  lamp,
  microsoftLogo,
  ohubFooter,
  ohubdevGray,
  ohubdevdesc,
} from "../../assets";

import { news, partners, techList } from "../../utils";
import {
  Header,
  Button,
  Cards,
  CardTech,
  Box,
  AvatarCard,
} from "../../components";

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
          <ContainerSubtitle>
            <SwiperSubtitle>
              Buscando as novidades do mercado, nossas soluções são construídas
              com o que será o melhor para a sua necessidade.
            </SwiperSubtitle>
            <img alt="Arrow right" src={ArrowRight} />
          </ContainerSubtitle>

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
            <img alt="ohubdev" src={ohubdevGray} />
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
        <Footer>
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
        </Footer>
      </ContainerBody>
    </Container>
  );
};
