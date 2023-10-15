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
  margin-bottom: 225px;
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
  align-items: center;

  span {
    margin-bottom: 0;
  }
`;

export const GridNews = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ContainerTalk = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
  justify-content: center;
  background-image: url(${Cloud});
  background-size: 100% 1511px;
  background-repeat: no-repeat;
  background-position: initial;
  max-height: 1511px;
  width: 100%;
  padding-bottom: 100px;
  margin-top: 229px;
  flex-direction: row;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 75px 202px 80px 221px;
  gap: 45px;
  margin-top: 668px;
  margin-left: 300px;
`;

type FooterColumnProps = {
  color?: string;
};

export const FooterColumn = styled.div<FooterColumnProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;

  a {
    width: fit-content;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: Raleway;
    font-weight: 400;
    color: ${({ color }) => (color ? color : "#313131")};
  }
`;

export const FooterLastColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  a {
    width: fit-content;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: Raleway;
    font-weight: 400;
    color: "#313131";
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  margin-top: 668px;
  margin-left: 72px;
`;
