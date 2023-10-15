import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { partners } from "../../utils";
import { SwiperTitle, SwiperSubtitle } from "../Carousel/style";
import { ContainerPartnersGrid, GridContainer } from "./style";

export const Partners: React.FC = () => {
  return (
    <ContainerPartnersGrid>
      <SwiperTitle>Clientes & Parceiros Ohub </SwiperTitle>
      <SwiperSubtitle>
        Clientes que caminham conosco e diversas emSwiperSubtitleresas que fazem
        parte do nosso projeto!
      </SwiperSubtitle>
      <GridContainer>
        {partners.map((partner) => (
          <img alt="partners" src={partner} />
        ))}
      </GridContainer>
    </ContainerPartnersGrid>
  );
};
