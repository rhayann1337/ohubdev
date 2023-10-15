import { styled } from "styled-components";

export const ContainerPartnersGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 225px;
`;

export const GridContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`;
