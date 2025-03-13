import React from "react";

import Heading from "../components/Heading";
import { Carousel } from "@mantine/carousel";

import userIcon from "../assets/images/users/user-icon.png";

import auction1 from "../assets/images/cards/auction-1.png";
import auction2 from "../assets/images/cards/auction-2.png";
import auction3 from "../assets/images/cards/auction-3.png";

import likeIcon from "../assets/images/icons/like.svg"
const cards = [
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
    <div>
      <Heading bubleColor="#8613A5">Live Auctions</Heading>

      <Carousel
        slideSize="70%"
        height={200}
        align="start"
        slideGap="md"
        controlsOffset="xs"
        controlSize={40}
        loop
      >
        {cards.map((card) => (
          <Carousel.Slide>
            <div className="card">
              <div className="image" style={{
                backgroundImage:`url(${card.img})`
              }}>
                <span className="timer">{card.time}</span>
              </div>
              <div className="title">
                <div className="author">
                    <span className="author-name">{card.authorName}</span>
                    <span className="author-tag">by {card.authorTag}</span>
                </div>
                <div className="likes">
                
                </div>
              </div>
              <div className="price"></div>
              <div className="place-bid"></div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Auctions;
