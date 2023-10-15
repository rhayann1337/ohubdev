import React from "react";
import { ArrowRight } from "../../assets";
import { SwiperSlide } from "swiper/react";

import { techList } from "../../utils";
import { CardTech } from "../CardTech";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  ContainerSwiper,
  SwiperTitle,
  ContainerSubtitle,
  SwiperSubtitle,
  CustomSwiper,
} from "./style";

export const Carousel: React.FC = () => {
  return (
    <ContainerSwiper>
      <SwiperTitle>Sempre com as melhores ferramentas</SwiperTitle>
      <ContainerSubtitle>
        <SwiperSubtitle>
          Buscando as novidades do mercado, nossas soluções são construídas com
          o que será o melhor para a sua necessidade.
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
  );
};
