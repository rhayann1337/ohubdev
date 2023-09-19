import styled from "styled-components";

type ContainerAvatarProps = {
  isBlue: boolean;
};

export const ContainerAvatar = styled.div<ContainerAvatarProps>`
  display: flex;
  padding: 99px 0 115px 70px;
  background-color: ${({ isBlue }) => (isBlue ? "#0000FF" : "#FF5403")};
  border-radius: 20px;
  max-width: 650px;
  max-height: 450px;
  color: white;
  margin: 0 10px 0 10px;

  img {
    position: relative;
    right: -70px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  margin: 0 0 16px 0;

  span {
    font-weight: 600;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-family: Raleway;
  font-weight: 400;
  margin: 0 0 32px 0;
  line-height: 24px;
`;

export const Question = styled.p`
  font-size: 20px;
  font-family: Raleway;
  font-weight: 600;
  margin: 0;
  line-height: 24px;
`;
