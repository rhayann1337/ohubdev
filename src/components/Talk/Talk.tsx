import React from "react";
import { ContainerTalk, TalkTitle, TalkButton } from "./style";

export const Talk: React.FC = () => {
  return (
    <ContainerTalk>
      <TalkTitle>Vamos conversar?</TalkTitle>
      <TalkButton>
        <p>Iniciar projeto</p>
      </TalkButton>
    </ContainerTalk>
  );
};
