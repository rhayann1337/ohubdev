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

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1320px;
  margin-bottom: 56px;
`;

export const ContainerWhatsapp = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  right: 32px;
  bottom: 32px;

  img {
    cursor: pointer;
  }
`;
