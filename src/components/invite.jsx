import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/Logo.png";
import dayjs from "dayjs";
import x from "../assets/x.png";

const Invite = () => {
  const {
    destination,
    setDestination,
    date,
    setDate,
    emailList,
    setEmailList,
  } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddEmail = () => {
    if (email && !emailList.includes(email)) {
      setEmailList([...emailList, email]);
      setEmail("");
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmailList(emailList.filter((e) => e !== emailToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Destino: ${destination}, Data: ${dayjs(date).format("DD/MM/YYYY")}`
    );
  };

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Adicionar e-mail"
                />
                <button
                  type="button"
                  className="add-email-button"
                  onClick={handleAddEmail}
                >
                  Adicionar
                </button>
              </div>
              <button
                type="button"
                className="confirm-button"
                onClick={handleConfirmClick}
              >
                Continue ➞
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

      {isModalOpen && (
        <>
          <div className="overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <h2>Selecionar os Convidados</h2>
            <p>
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
            </p>
            <div className="email-tags">
              {emailList.map((e, index) => (
                <div key={index} className="email-tag">
                  <span>{e}</span>
                  <button
                    type="button"
                    className="remove-email-button"
                    onClick={() => handleRemoveEmail(e)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleCloseModal} className="modal-close-button">
              <img src={x} className="x" alt="Fechar" />
            </button>
            <NavLink
              to="/confirmTrip"
              onClick={handleConfirmClick}
              className="modal-confirm-button"
            >
              Confirme Aqui
            </NavLink>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Invite;
