import React from "react";
import "../App.css";
import logo from "../assets/Logo.png";
import destiny from "../assets/Color2.png";
import ping from "../assets/map-pin.png";
import bottomGreen from "../assets/ColorGreen.png";
import calendar from "../assets/calendar.png";

const Content = () => {
  return (
    <>
      <div className="banner">
        <img src={logo} className="image-logo" />
        <h1>Convide seus amigos e planeje sua próxima viagem!</h1>
      </div>
      <div className="start">
        <img src={destiny} className="image-destiny" />
        <img src={ping} className="ping" />
        <h2>Para onde você vai?</h2>
        <img src={bottomGreen} className="bottom-next" />
        <h3>Continue {"-->"}</h3>
        <img src={calendar} className="calendar" />
        <h4>Quando?</h4>
        <p>
          Ao planejar sua viagem pela plann.er você automaticamente concorda com
          nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Content;
