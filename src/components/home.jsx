import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/Logo.png";
import ping from "../assets/map-pin.png";
import calendar from "../assets/calendar.png";
import dayjs from "dayjs";

const Content = () => {
  const { setDestination, setDate } = useAppContext();
  const [localDestination, setLocalDestination] = useState("");
  const [localDate, setLocalDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDestinationChange = (e) => {
    setLocalDestination(e.target.value);
    setError("");
  };

  const handleDateChange = (e) => {
    setLocalDate(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!localDestination) {
      setError("Por favor, digite seu destino.");
      return;
    }

    setDestination(localDestination);
    setDate(localDate);
    navigate("/invite");
  };

  return (
    <React.Fragment>
      <div className="banner">
        <img src={logo} alt="Logo" className="image-logo" />
        <h1>Convide seus amigos e planeje sua próxima viagem!</h1>
      </div>
      <div className="start">
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <img src={ping} alt="Destino" className="icon" />
            <input
              type="text"
              id="destination"
              value={localDestination}
              onChange={handleDestinationChange}
              placeholder="Digite seu destino"
              className="input-field"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <img src={calendar} alt="Pin de Mapa" className="icon" />
            <input
              type="date"
              id="date"
              value={localDate}
              onChange={handleDateChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Continue ➞
          </button>
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
