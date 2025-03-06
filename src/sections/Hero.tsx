import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-part">
        <div className="top-part">
          <h1>
            Explore, Buy and Sell the <span>Best NFTs!</span>
          </h1>
          <div className="buttons">
            <Button
              bgColor="#FFCE4E"
              textColor="#000000"
              padding="24px 76px"
              borderColor="#FFCE4E"
            >
              Connect Wallet
            </Button>
            <Button
              bgColor="#E9D7A7"
              bgOpacity={0.1}
              textColor="#FFFFFF"
              padding="24px 76px"
              borderColor="#FFCE4E"
            >
              Connect Wallet
            </Button>
          </div>
        </div>
        <div className="bottom-part">
          <div className="stat-number">
            <strong>32k+</strong>
            <span>Artworks</span>
          </div>
          <div className="stat-number">
            <strong>20k+</strong>
            <span>Auctions</span>
          </div>
          <div className="stat-number">
            <strong>12k+</strong>
            <span>Creators</span>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="auction-card">
          <div className="top-part">
            <div className="info">
              <div className="info-cell">
                <div className="name">Current bid</div>
                <div className="value">0.99 ETH</div>
              </div>
              <div className="info-cell">
                <div className="name">Ends in</div>
                <div className="value">25 hrs</div>
              </div>
            </div>
          </div>
          <div className="bottom-part">
            <div className="name">
              <span>Artis</span>
              <span>@wzard</span>
            </div>
            <div className="start-bit">
              <Button
                bgColor="#FFCE4E"
                textColor="#000000"
                padding="23px 44px"
                borderColor="#FFCE4E"
              >
                Start bit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
