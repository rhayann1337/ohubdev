import React from "react";
import { Header } from "../../components/Header/header";
import {
  Container,
  ContainerBody,
  ContainerMainContent,
  ContainerSwiper,
  Content,
  Description,
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
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

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
          <Swiper
            slidesPerView={50}
            spaceBetween={600}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
          >
            <SwiperSlide>
              <Button text="Iniciar projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <Button text="Iniciar projeto" />
            </SwiperSlide>
          </Swiper>
        </ContainerSwiper>
      </ContainerBody>
    </Container>
  );
};
