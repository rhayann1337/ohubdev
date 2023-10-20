import { ContainerCards } from "./style";
import React from "react";
import BlueWorldIcon from "../../assets/Blue_world";
import { Card } from "../Card/Card";
import FolderIcon from "../../assets/FolderIcon";
import ParcIcon from "../../assets/ParcIcon";
import MicrosoftImage from "../../assets/micros_icon.svg";

export const Cards: React.FC = () => {
  const url = "https://whatsapp.com";

  return (
    <ContainerCards id="Solution">
      <Card
        title="Consultoria em Tecnologia"
        subtitle="Converse com nossos especialistas para trazer os melhores resultados, aumentar sua produtividade através de uma consultoria."
        buttonText="Eu quero"
        colorButton="#0000FF"
        onClick={() => window.open(url)}
      >
        <BlueWorldIcon />
      </Card>
      <Card
        title="Desenvolvimento Web"
        subtitle="Desenvolvemos seu sistema totalmente na web para não se preocupar com compatibilidade, acesse de onde estiver com nossos sites responsivos e leves."
        buttonText="Eu quero"
        isLeft={false}
        onClick={() => window.open(url)}
      >
        <FolderIcon />
      </Card>
      <Card
        title="Produtos Microsoft"
        subtitle="Consiga produtos Microsoft com melhor preços, ou conte com a melhor desta tecnologia para o desenvolvimento da sua aplicação."
        buttonText="Eu quero"
        colorButton="#0000FF"
        onClick={() => window.open(url)}
      >
        <img alt="Icon" src={MicrosoftImage} />
      </Card>
      <Card
        title="Softwares Parceiros"
        subtitle="Conheça todos os produtos de diversas áreas e soluções que podemos oferecer com as nossas parcerias."
        buttonText="Eu quero"
        isLeft={false}
        onClick={() => window.open(url)}
      >
        <ParcIcon />
      </Card>
    </ContainerCards>
  );
};
