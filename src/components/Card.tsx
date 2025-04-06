import { Carousel } from "@mantine/carousel";
import React from "react";
import Button from "./Button";
import { card } from "../sections/Auctions";
import likeIcon from "../assets/images/icons/like.svg";

const Card = ({ card }: { card: card }) => {
  return (
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
                <img src={likeIcon} alt="like-icon" className="like-icon" />
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
  );
};

export default Card;
