import { styled } from "styled-components";
import { Cloud } from "../../assets";

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Cloud});
  background-size: 100% 1511px;
  background-repeat: no-repeat;
  background-position: initial;
  max-height: 1511px;
  width: 100%;
  padding-bottom: 100px;
  margin-top: 229px;
  flex-direction: row;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 75px 202px 80px 221px;
  gap: 45px;
  margin-top: 668px;
  margin-left: 300px;
`;

type FooterColumnProps = {
  color?: string;
  isPointerEnabled?: boolean;
};

export const FooterColumn = styled.div<FooterColumnProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;

  a {
    width: fit-content;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: Raleway;
    font-weight: 400;
    color: ${({ color }) => (color ? color : "#313131")};
    cursor: ${({ isPointerEnabled }) =>
      isPointerEnabled ? "pointer" : "initial"};
  }
`;

export const FooterLastColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  a {
    width: fit-content;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: Raleway;
    font-weight: 400;
    color: "#313131";
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  margin-top: 668px;
  margin-left: 72px;
`;
