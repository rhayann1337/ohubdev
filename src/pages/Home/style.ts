import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f6;
`;

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerMainContent = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Content = styled.div`
  max-width: 1320px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 21px;
  }
`;

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
`;

export const SwiperSubtitle = styled.span`
  margin-bottom: 44px;
  font-size: 24px;
  line-height: 32px;
  font-family: Raleway;
  font-weight: 400;
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DescriptionFirstText = styled.h3`
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  margin: 0;

  span {
    color: #ff5403;
  }
`;

export const DescriptionSecondText = styled.h3`
  font-size: 40px;
  font-family: Raleway;
  font-weight: 600;
  margin-bottom: 112px;
  margin-top: 0;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1320px;
`;
