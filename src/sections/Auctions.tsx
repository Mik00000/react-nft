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
        nextControlIcon={<ArrowRight width={"54px"} height={"54px"}/>}
        previousControlIcon={<ArrowLeft width={"54px"} height={"54px"} />}
      >
        {cards.map((card) => (
          <Carousel.Slide>
            <div className="card">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
              >
                <span className="timer">{card.time}</span>
              </div>

              <div className="title">
                <div className="author">
                  <div className="left-part">
                    <div className="author-icon">
                      <img src={card.authorImage} alt="author-icon" />
                    </div>
                    <div className="author-info">
                      <span className="author-name">{card.authorName}</span>
                      <span className="author-tag">by {card.authorTag}</span>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="likes">
                      <img
                        src={likeIcon}
                        alt="like-icon"
                        className="like-icon"
                      />
                      <span>{card.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price">
                <span>Current Bid</span>
                <span className="price-value">{card.price}</span>
              </div>
              <div className="place-bid">
                <Button
                  padding="21px 145px"
                  textColor="#fff"
                  bgColor="#e9d7a7"
                  bgOpacity={0.1}
                  borderColor="#fde8b3"
                >
                  Place a bid
                </Button>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Auctions;
