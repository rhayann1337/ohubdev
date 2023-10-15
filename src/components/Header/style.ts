import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px;
`;

export const ContainerLogo = styled.div``;

export const ContainerButtons = styled.div`
  display: flex;

  p {
    margin-right: 64px;
    font-family: Raleway;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    cursor: pointer;

    :last-child {
      margin-right: 0;
    }
  }
`;
export const ContainerSocial = styled.div`
  img {
    cursor: pointer;
    margin-right: 51px;

    :last-child {
      margin-right: 0;
    }
  }
`;
