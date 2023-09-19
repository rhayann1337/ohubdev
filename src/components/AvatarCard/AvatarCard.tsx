import React from "react";
import {
  ContainerAvatar,
  ContainerInfo,
  Title,
  Question,
  Subtitle,
} from "./style";

type AvatarCardProps = {
  title: string;
  subtitle: string;
  question: string;
  avatarUrl: string;
  avatarName: string;
  isBlue?: boolean;
};

export const AvatarCard: React.FC<AvatarCardProps> = ({
  title,
  subtitle,
  question,
  avatarUrl,
  avatarName,
  isBlue = true,
}) => {
  return (
    <ContainerAvatar isBlue={isBlue}>
      <ContainerInfo>
        <Title>
          {title}
          <span>{avatarName}</span>
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Question>{question}</Question>
      </ContainerInfo>
      <img src={avatarUrl} alt="Avatar Card" />
    </ContainerAvatar>
  );
};
