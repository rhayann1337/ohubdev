import { styled } from "styled-components";

export const ContainerTalk = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff5403;
  border-radius: 20px;
  width: 100%;
  max-width: 1320px;
  align-items: center;
  justify-content: center;
  padding: 172px 0;
`;

export const TalkTitle = styled.h3`
  font-size: 40px;
  line-height: 48px;
  font-family: Raleway;
  font-weight: 300;
  margin-bottom: 16px;
  color: #ffffff;
`;

export const TalkButton = styled.button`
  border-radius: 10px;
  width: 320px;
  background-color: #fefefe;
  border: none;
  padding: 10px 0;

  p {
    color: #313131;
    font-size: 20px;
    font-family: Raleway;
    margin: 0;
    cursor: pointer;
  }
`;
