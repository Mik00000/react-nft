import React from "react";

import Heading from "../components/Heading";
import { Carousel } from "@mantine/carousel";

import userIcon from "../assets/images/users/user-icon.png";

import auction1 from "../assets/images/cards/auction-1.png";
import auction2 from "../assets/images/cards/auction-2.png";
import auction3 from "../assets/images/cards/auction-3.png";

import likeIcon from "../assets/images/icons/like.svg";
import Button from "../components/Button";

import { ReactComponent as ArrowLeft } from "../assets/images/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/images/icons/arrowRight.svg";
import Card from "../components/Card";
export type card = {
  img: string;
  price: string;
  likes: number;
  time: string;
  authorName: string;
  authorTag: string;
  authorImage: string;
};

const cards: card[] = [
  {
    img: auction1,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: userIcon,
  },
  {
    img: auction2,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: userIcon,
  },
  {
    img: auction3,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: userIcon,
  },
];

const Auctions = () => {
  return (
    <div className="auctions">
      <Heading bubleColor="#8613A5">Live Auctions</Heading>

      <Carousel
        slideSize="30%"
        height={691}
        align="start"
        slideGap="45px"
        controlsOffset="xs"
        controlSize={40}
        loop
        nextControlIcon={<ArrowRight width={"54px"} height={"54px"} />}
        previousControlIcon={<ArrowLeft width={"54px"} height={"54px"} />}
      >
        {cards.map((card) => (
          <Card card={card} />
        ))}
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </Carousel>
      <Button padding="24px 65px" textColor="#FFF" borderColor="#FFCE4E" style={{
        width:"fit-content",
        margin:"0 auto"
      }}>View All</Button>
    </div>
  );
};

export default Auctions;
