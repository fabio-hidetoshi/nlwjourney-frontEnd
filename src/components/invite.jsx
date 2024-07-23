import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/Logo.png";
import ping from "../assets/map-pin.png";
import calendar from "../assets/calendar.png";
import dayjs from "dayjs";

const Invite = () => {
  const { future, setFuture } = useAppContext();
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
      <div className="app">
        <header className="app-header">
          <img src={logo} alt="Logo" />
          <p>Convide seus amigos e planeje sua próxima viagem!</p>
        </header>
        <main className="trip-planner">
          <form onSubmit={handleSubmit}>
            <div className="location-date">
              <div className="input-group">
                <p>Destino</p>
                <input
                  type="text"
                  value={destination}
                  onChange={handleDestinationChange}
                  placeholder="Rio de Janeiro"
                />
              </div>
              <div className="input-group">
                <label>Data</label>
                <input type="date" value={date} onChange={handleDateChange} />
              </div>
              <button type="button" className="change-button">
                Alterar local/data
              </button>
            </div>
            <div className="travelers">
              <div className="input-group">
                <label>Quem estará na viagem?</label>
                <input type="text" placeholder="Adicionar amigos" />
              </div>
              <button type="submit" className="confirm-button">
                Confirmar viagem
              </button>
            </div>
          </form>
        </main>
        <footer className="app-footer">
          <p>
            Ao planejar sua viagem pela plann.er você automaticamente concorda
            com nossos <a href="#">termos de uso</a> e{" "}
            <a href="#">políticas de privacidade</a>.
          </p>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Invite;
