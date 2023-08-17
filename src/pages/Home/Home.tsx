import React from "react";
import { Header } from "../../components/Header/header";
import {
  Container,
  ContainerBody,
  ContainerCards,
  ContainerMainContent,
  Content,
  Description,
} from "./style";
import lamp from "../../assets/lamp.svg";
import ohubdevdesc from "../../assets/ohubdev-desc.svg";
import microsoftLogo from "../../assets/microsoft-logo.svg";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import BlueWorldIcon from "../../assets/Blue_world";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <ContainerMainContent>
          <Content>
            <Description>
              <img alt="ohubdev" src={ohubdevdesc} />
              <Button text="Iniciar projeto" />
            </Description>
            <img alt="lamp" src={lamp} />
          </Content>
          <img alt="microsoftLogo" src={microsoftLogo} />
        </ContainerMainContent>
        <ContainerCards>
          <Card
            title="Consultoria em Tecnologia"
            subtitle="Converse com nossos especialistas para trazer os melhores resultados, aumentar sua produtividade através de uma consultoria."
            buttonText="Eu quero"
          >
            <BlueWorldIcon />
          </Card>
          <Card
            title="Consultoria em Tecnologia"
            subtitle="Converse com nossos especialistas para trazer os melhores resultados, aumentar sua produtividade através de uma consultoria."
            buttonText="Eu quero"
            isLeft={false}
          >
            <BlueWorldIcon />
          </Card>
        </ContainerCards>
      </ContainerBody>
    </Container>
  );
};
