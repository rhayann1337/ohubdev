import React from "react";
import { Button } from "../Button/Button";
import { ContainerMainContent, Content, Description } from "./style";
import { ohubdevdesc, lamp, microsoftLogo } from "../../assets";

export const Welcome: React.FC = () => {
  return (
    <ContainerMainContent id="Welcome">
      <Content>
        <Description>
          <img alt="ohubdev" src={ohubdevdesc} />
          <Button text="Iniciar projeto" />
        </Description>
        <img alt="lamp" src={lamp} />
      </Content>
      <img alt="microsoftLogo" src={microsoftLogo} />
    </ContainerMainContent>
  );
};
