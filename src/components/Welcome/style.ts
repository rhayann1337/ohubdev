import { styled } from "styled-components";

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
