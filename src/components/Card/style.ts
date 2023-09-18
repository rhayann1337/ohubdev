import { styled } from "styled-components";

type CardProps = {
  isLeft: boolean;
};

export const ContainerCard = styled.div<CardProps>`
  display: flex;
  max-width: 1246px;
  min-width: 1246px;
  align-items: center;
  margin-bottom: 24px;
  justify-content: space-between;
  flex-direction: ${({ isLeft }) => (isLeft ? "row-reverse" : "row")};
`;

export const ContainerCenter = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isLeft }) => (isLeft ? "flex-end" : "flex-start")};
`;

export const ContainerInfo = styled.div<CardProps>`
  border-radius: 20px;
  background-color: #ffffff;
  padding: ${({ isLeft }) =>
    isLeft ? "110px 90px 110px 0" : "110px 0 110px 90px"};
  display: flex;
  align-items: center;
  max-width: 1015px;
  min-width: 1015px;
  flex-direction: ${({ isLeft }) => (isLeft ? "row-reverse" : "row")};
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 64px;
  font-weight: 500;
  font-family: Raleway;
  max-width: 645px;
  margin: 0;
  margin-bottom: 34px;
`;

export const Subtitle = styled.p<CardProps>`
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  font-family: Raleway;
  max-width: 645px;
  margin: 0;
  margin-bottom: 28px;
  text-align: ${({ isLeft }) => (isLeft ? "end" : "start")};
`;

export const ContainerChildren = styled.div<CardProps>`
  position: relative;
  left: ${({ isLeft }) => (isLeft ? "50px" : "-50px")};
  height: auto;
  z-index: 1;
`;
