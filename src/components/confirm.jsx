import React, { useState } from "react";
import dayjs from "dayjs";
import { useAppContext } from "../AppContext";
import "../Planning.css";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import people from "../assets/user.png";
import mail from "../assets/mail.png";

const Confirm = () => {
  const {
    destination,
    date,
    emailList,
    setEmailList,
    setDestination,
    setDate,
  } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = () => {
    setDestination("Florianópolis, Brasil");
    setDate("2024-08-17");

    navigate("/activities");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome: ${name}, Email: ${email}`);
  };

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

        <button
          type="button"
          className="button-confirm"
          onClick={handleConfirmClick}
        >
          Confirmar Criação da Viagem
        </button>
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

      {isModalOpen && (
        <>
          <div className="overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <h2>Confirmar Criação de Viagem</h2>
            <p>
              Para concluir a criação da viagem para {destination} nas datas{" "}
              {dayjs(date).locale("pt-br").format("DD [de] MMMM [de] YYYY")},
              preencha seus dados abaixo:
            </p>
            <div className="input-container">
              <img src={people} className="input-icon" />
              <input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={handleNameChange}
                className="name-input"
              />
            </div>
            <div className="input-container">
              <img src={mail} className="input-icon" />
              <input
                type="email"
                placeholder="Seu e-mail pessoal"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
            </div>
            <NavLink
              to="/details"
              onClick={handleConfirmClick}
              className="button-submit"
            >
              {" "}
              Confirmar Criação da Viagem
            </NavLink>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Confirm;
