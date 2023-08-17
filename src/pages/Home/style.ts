import styled from "styled-components";

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

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin-top: 50px;
`;
