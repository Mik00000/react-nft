import React from "react";
import Heading from "../components/Heading";
import stepImg0 from "../assets/images/icons/step-0.svg";
import stepImg1 from "../assets/images/icons/step-1.svg";
import stepImg2 from "../assets/images/icons/step-2.svg";
import stepImg3 from "../assets/images/icons/step-3.svg";

const steps: { text: string; img: string }[] = [
  {
    text: "Set up your wallet",
    img: stepImg0,
  },
  {
    text: "Create your collection",
    img: stepImg1,
  },
  {
    text: "Add your NFTs",
    img: stepImg2,
  },
  {
    text: "List them for sale",
    img: stepImg3,
  },
];
const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <Heading>How it works</Heading>
      <div className="steps">
        {steps.map((step, key) => (
          <>
            <div className="step">
              <img src={step.img} alt="step-icon" />
              <span>{step.text}</span>
            </div>
            {steps.length - 1 !== key && (
                <div className="line"/>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
