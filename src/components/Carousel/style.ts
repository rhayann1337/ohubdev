import { styled } from "styled-components";
import { Swiper } from "swiper/react";

export const ContainerSwiper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin-bottom: 178px;
  min-width: 1320px;
`;

export const SwiperTitle = styled.h3`
  font-size: 40px;
  line-height: 53px;
  font-family: Raleway;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

export const SwiperSubtitle = styled.span`
  font-size: 22px;
  line-height: 32px;
  font-family: Raleway;
  font-weight: 300;
  margin: 0 44px 0 0;
`;

export const ContainerSubtitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 44px;

  img {
    cursor: pointer;
  }
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
`;
