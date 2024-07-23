import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../AppContext";
import "../Planning.css";
import logo from "../assets/Logo.png";

const Confirm = () => {
  const { destination, date, emailList } = useAppContext();

  return (
    <React.Fragment>
      <div className="banner">
        <img src={logo} alt="Logo" className="image-logo" />
        <h1>Convide seus amigos e planeje sua próxima viagem!</h1>
      </div>

      <div className="trip-summary">
        <div className="trip-details">
          <p>📍 {destination}</p>
          <p>
            📅 {dayjs(date).locale("pt-br").format("DD [de] MMMM [de] YYYY")}
          </p>
        </div>
        <div className="trip-participants">
          <p>👥 {emailList.length} pessoa(s) convidada(s)</p>
        </div>
        <NavLink to="/invite" className="confirm-button">
          Confirmar viagem ➞
        </NavLink>
      </div>

      <footer className="app-footer">
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
      </footer>
    </React.Fragment>
  );
};

export default Confirm;
