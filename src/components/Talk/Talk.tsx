import React from "react";
import { ContainerTalk, TalkTitle, TalkButton } from "./style";

export const Talk: React.FC = () => {
  return (
    <ContainerTalk>
      <TalkTitle>Vamos conversar?</TalkTitle>
      <TalkButton onClick={() => window.open("https://whatsapp.com")}>
        <p>Iniciar projeto</p>
      </TalkButton>
    </ContainerTalk>
  );
};
