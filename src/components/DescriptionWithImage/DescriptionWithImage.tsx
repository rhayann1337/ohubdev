import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { VetorImage } from "../../assets";
import {
  ContainerDescription,
  DescriptionFirstText,
  DescriptionSecondText,
} from "./style";

export const DescriptionWithImage: React.FC = () => {
  return (
    <>
      <ContainerDescription id="About">
        <DescriptionFirstText>
          Somos um <span>hub</span> de desenvolvimento! Focados em solucionar
        </DescriptionFirstText>
        <DescriptionSecondText>
          problemas e propagar ideias para todo o tipo de negócio!
        </DescriptionSecondText>
      </ContainerDescription>
      <img alt="DescriptionImage" src={VetorImage} />
    </>
  );
};
