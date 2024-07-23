import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/Logo.png";
import ping from "../assets/map-pin.png";
import calendar from "../assets/calendar.png";
import dayjs from "dayjs";

const Content = () => {
  const { future, setFuture } = useAppContext(); // Verifique o contexto
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Destino: ${destination}, Data: ${dayjs(date).format("DD/MM/YYYY")}`
    );
  };

  return (
    <React.Fragment>
      <div className="banner">
        <img src={logo} alt="Logo" className="image-logo" />
        <h1>Convide seus amigos e planeje sua próxima viagem!</h1>
      </div>
      <div className="start">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <img src={ping} alt="Destino" className="icon" />
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="Digite seu destino"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <img src={calendar} alt="Pin de Mapa" className="icon" />
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="input-field"
            />
          </div>
          <NavLink to="/invite" className="submit-button">
            Continue ➞
          </NavLink>
        </form>
      </div>
      <p>
        Ao planejar sua viagem pela plann.er você automaticamente concorda com
        nossos{" "}
        <a className="text-link" href="#">
          termos de uso
        </a>{" "}
        e{" "}
        <a className="text-link" href="#">
          políticas de privacidade
        </a>
        .
      </p>
    </React.Fragment>
  );
};

export default Content;
