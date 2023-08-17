import styled from "styled-components";

type ContainerButtonProps = {
  largeButton?: boolean;
};

export const ContainerButton = styled.div<ContainerButtonProps>`
  max-width: fit-content;
  border-radius: 24px;
  background-color: #ff5403;
  padding: ${({ largeButton }) => (largeButton ? "8px 100px" : "8px 50px")};

  p {
    margin: 0;
    color: white;
    font-family: Raleway;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
`;
