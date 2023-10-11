import styled from "styled-components";
import { Swiper } from "swiper/react";
import Cloud from "../../assets/cloud.svg";

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
  margin-bottom: 56px;
`;

export const ContainerPartnersGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const TextNews = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  justify-content: space-between;
`;

export const GridNews = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ContainerTalk = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  background-color: #ff5403;
  border-radius: 20px;
  width: 100%;
  max-width: 1320px;
  align-items: center;
  justify-content: center;
  padding: 172px 0;
`;

export const TalkTitle = styled.h3`
  font-size: 40px;
  line-height: 48px;
  font-family: Raleway;
  font-weight: 300;
  margin-bottom: 16px;
  color: #ffffff;
`;

export const TalkButton = styled.button`
  border-radius: 10px;
  width: 320px;
  background-color: #fefefe;
  border: none;
  padding: 10px 0;

  p {
    color: #313131;
    font-size: 20px;
    font-family: Raleway;
    margin: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  background-image: url(${Cloud});
  background-size: cover;
  background-position: center;
  height: 1511px;
  width: 100%;
`;
