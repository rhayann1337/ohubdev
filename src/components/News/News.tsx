import React from "react";
import { ohubdevGray } from "../../assets";
import { news } from "../../utils";
import { SwiperSubtitle } from "../Carousel/style";
import { NewsContainer, TextNews, GridNews } from "./style";

export const News: React.FC = () => {
  return (
    <NewsContainer>
      <TextNews>
        <SwiperSubtitle>Veja as nossas novidades no Instagram</SwiperSubtitle>
        <img alt="ohubdev" src={ohubdevGray} />
      </TextNews>
      <GridNews>
        {news.map((item) => (
          <img alt="news" src={item} />
        ))}
      </GridNews>
    </NewsContainer>
  );
};
