import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import dayjs from "dayjs";
import "../Activities.css";

const Activities = () => {
  const { destination, date } = useAppContext();
  const [importantLinks, setImportantLinks] = useState([
    { title: "Reserva no Airbnb", url: "https://www.airbnb.com" },
    { title: "Regras da casa", url: "https://www.notion.com" },
  ]);
  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [guests, setGuests] = useState([
    { name: "Jessica White", email: "jessica.white44@yahoo.com" },
    { name: "Dr. Rita Paconha", email: "lacy.sidedemann@gmail.com" },
  ]);
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestEmail, setNewGuestEmail] = useState("");

  const handleAddLink = () => {
    if (newLinkTitle && newLinkUrl) {
      setImportantLinks([
        ...importantLinks,
        { title: newLinkTitle, url: newLinkUrl },
      ]);
      setNewLinkTitle("");
      setNewLinkUrl("");
    }
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = importantLinks.filter((_, i) => i !== index);
    setImportantLinks(updatedLinks);
  };

  const handleAddGuest = () => {
    if (newGuestName && newGuestEmail) {
      setGuests([...guests, { name: newGuestName, email: newGuestEmail }]);
      setNewGuestName("");
      setNewGuestEmail("");
    }
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  return (
    <div className="activities-container">
      <header className="activities-header">
        <div className="location-date">
          <h2>{destination}</h2>
          <span>
            {dayjs(date).locale("pt-br").format("DD [de] MMMM [de] YYYY")}
          </span>
        </div>
        <button className="change-button">Alterar local/data</button>
      </header>

      <div className="activities-content">
        <section className="activities-list">
          <h3>Atividades</h3>
          <div className="activity-day">
            <h4>Dia 18</h4>
            <div className="activity">
              <p>Corrida de Kart</p>
              <span>14:00h</span>
            </div>
          </div>
          {/* Continue listando outras atividades */}
        </section>

        <aside className="activities-sidebar">
          <h3>Links importantes</h3>
          <div className="important-links">
            {importantLinks.map((link, index) => (
              <div key={index} className="link-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
                <button onClick={() => handleRemoveLink(index)}>Remover</button>
              </div>
            ))}
            <div className="add-link-form">
              <input
                type="text"
                placeholder="Título do link"
                value={newLinkTitle}
                onChange={(e) => setNewLinkTitle(e.target.value)}
              />
              <input
                type="url"
                placeholder="URL do link"
                value={newLinkUrl}
                onChange={(e) => setNewLinkUrl(e.target.value)}
              />
              <button onClick={handleAddLink}>+ Cadastrar novo link</button>
            </div>
          </div>

          <h3>Convidados</h3>
          <div className="guests-list">
            {guests.map((guest, index) => (
              <div key={index} className="guest-item">
                <p>
                  {guest.name} - {guest.email}
                </p>
                <button onClick={() => handleRemoveGuest(index)}>
                  Remover
                </button>
              </div>
            ))}
            <div className="add-guest-form">
              <input
                type="text"
                placeholder="Nome do convidado"
                value={newGuestName}
                onChange={(e) => setNewGuestName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail do convidado"
                value={newGuestEmail}
                onChange={(e) => setNewGuestEmail(e.target.value)}
              />
              <button onClick={handleAddGuest}>+ Adicionar convidado</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Activities;
