import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Header = () => {
  const headerMenu = [
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "Creators",
      link: "/creators",
    },
    {
      name: "Community",
      link: "/community",
    },
  ];
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="header-menu">
        {headerMenu.map((item)=>(
            <Link to={item.link}>{item.name}</Link>
        ))}
      </nav>
      <Button bgColor="#E9D7A7" bgOpacity={0.1} textColor="#FFCE4E" padding="21px 30px" borderColor="#FFCE4E">Connect Wallet</Button>
    </header>

  );
};

export default Header;
