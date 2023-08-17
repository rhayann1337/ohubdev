import { styled } from "styled-components";

type CardProps = {
  isLeft: boolean;
};

export const ContainerCard = styled.div`
  display: flex;
  max-width: 1246px;
  min-width: 1246px;
  align-items: center;
  margin-bottom: 24px;
`;

export const ContainerCenter = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isLeft }) => (isLeft ? "flex-end" : "flex-start")};
`;

export const ContainerInfo = styled.div<CardProps>`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 110px 90px;
  display: flex;
  align-items: center;
  max-width: 1015px;
  min-width: 1015px;
  position: relative;
  flex-direction: ${({ isLeft }) => (isLeft ? "row-reverse" : "row")};
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 64px;
  font-weight: 500;
  max-width: 645px;
  margin: 0;
  margin-bottom: 34px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  max-width: 645px;
  margin: 0;
  margin-bottom: 28px;
`;

export const ContainerChildren = styled.div<CardProps>`
  position: absolute;
  left: ${({ isLeft }) => (isLeft ? "-200px" : "1150px")};
  height: auto;
  z-index: 1;
`;
