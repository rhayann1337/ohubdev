import { styled } from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #000000;
  border-radius: 20px;
  padding: 86px 0 86px 0;
  justify-content: space-between;
  min-width: 1320px;
  margin-bottom: 20px;
  max-width: 1320px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`;

export const Title = styled.h3`
  font-size: 40px;
  line-height: 54px;
  color: #ffffff;
  font-family: Raleway;
  text-align: left;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 27px;
  text-align: left;
  color: #ffffff;
  font-family: Raleway;
  margin: 0 0 27px 0;
`;
