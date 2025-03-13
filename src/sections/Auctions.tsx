import React from "react";

import Heading from "../components/Heading";
import { Carousel } from "@mantine/carousel";

import userIcon from "../assets/images/users/user-icon.png";

import aucton1 from "../assets/images/cards/auction-1.png";
import aucton2 from "../assets/images/cards/auction-2.png";
import aucton3 from "../assets/images/cards/auction-3.png";

const cards = [
  {
    img: aucton1,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: userIcon,
  },
  {
    img: aucton2,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: userIcon,
  },
  {
    img: aucton3,
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
                backgroundImage:card.img
              }}>
                <span className="timer">{card.time}</span>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Auctions;
