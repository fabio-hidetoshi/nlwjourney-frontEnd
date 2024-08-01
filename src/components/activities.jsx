import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import "../Activities.css";

const Activities = () => {
  const { destination, setDestination, date, setDate, emailList } =
    useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState(date);
  const [activityTime, setActivityTime] = useState("");
  const [activityLocation, setActivityLocation] = useState("");
  const [activities, setActivities] = useState([]);
  const [importantLinks, setImportantLinks] = useState([
    { title: "Reserva no Airbnb", url: "https://www.airbnb.com" },
    { title: "Regras da casa", url: "https://www.notion.com" },
  ]);
  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [guests, setGuests] = useState([]);
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestEmail, setNewGuestEmail] = useState("");

  const [newDestination, setNewDestination] = useState(destination);
  const [newDate, setNewDate] = useState(date);

  const handleConfirm = () => {
    if (activityName && activityTime && activityLocation) {
      setActivities([
        ...activities,
        {
          name: activityName,
          date: activityDate,
          time: activityTime,
          location: activityLocation,
        },
      ]);
      setActivityName("");
      setActivityDate(date);
      setActivityTime("");
      setActivityLocation("");
      setIsModalOpen(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenChangeModal = () => {
    setIsChangeModalOpen(true);
  };

  const handleCloseChangeModal = () => {
    setIsChangeModalOpen(false);
  };

  const handleChangeConfirm = () => {
    console.log("New destination:", newDestination);
    console.log("New date:", newDate);
    setDestination(newDestination);
    setDate(newDate);
    setIsChangeModalOpen(false);
  };

  useEffect(() => {
    setGuests(emailList);
  }, [emailList]);

  // useEffect(() => {
  //   console.log("Destination:", destination);
  //   console.log("Date:", date);
  //   console.log("Email List:", emailList);
  // }, [destination, date, emailList]);

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

  useEffect(() => {
    console.log("Activities component destination:", destination);
    console.log("Activities component date:", date);
  }, [destination, date]);

  return (
    <div className="activities-container">
      <header className="activities-header">
        <div className="location-date">
          <h2>{destination || "Local não definido"}</h2>
          <span>
            {destination && date
              ? `${destination} - ${dayjs(date)
                  .locale("pt-br")
                  .format("DD [de] MMMM [de] YYYY")}`
              : "Data não definida"}
          </span>
        </div>
        <button className="change-button" onClick={handleOpenChangeModal}>
          Alterar local/data
        </button>
      </header>

      <div className="activities-content">
        <section className="activities-list">
          <h3>Atividades</h3>
          <button className="create-button" onClick={handleOpenModal}>
            + Cadastrar Atividade
          </button>
          <div className="activity-day">
            <h4>{dayjs(date).locale("pt-br").format("DD [de] MMMM")}</h4>
            {activities.map((activity, index) => (
              <div key={index} className="activity">
                <p>{activity.name}</p>
                <span>
                  {dayjs(activity.date).format("DD/MM/YYYY")} - {activity.time}{" "}
                  - {activity.location}
                </span>
              </div>
            ))}
          </div>
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

      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <h2>Cadastrar Atividade</h2>
            <p>Todos convidados podem visualizar as atividades.</p>
            <div className="input-group">
              <label htmlFor="activity-name">Qual a atividade?</label>
              <input
                id="activity-name"
                type="text"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="activity-date">Data</label>
              <input
                id="activity-date"
                type="date"
                value={activityDate}
                onChange={(e) => setActivityDate(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="activity-time">Horário</label>
              <input
                id="activity-time"
                type="time"
                value={activityTime}
                onChange={(e) => setActivityTime(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="activity-location">Local</label>
              <input
                id="activity-location"
                type="text"
                value={activityLocation}
                onChange={(e) => setActivityLocation(e.target.value)}
              />
            </div>
            <button onClick={handleConfirm} className="button-submit">
              Salvar atividade
            </button>
          </div>
        </>
      )}

      {isChangeModalOpen && (
        <>
          <div className="modal-overlay" onClick={handleCloseChangeModal}></div>
          <div className="modal-content">
            <h2>Alterar Local/Data</h2>
            <div className="input-group">
              <label htmlFor="new-destination">Novo local</label>
              <input
                id="new-destination"
                type="text"
                value={newDestination}
                onChange={(e) => setNewDestination(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="new-date">Nova data</label>
              <input
                id="new-date"
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
            </div>
            <button onClick={handleChangeConfirm} className="button-submit">
              Confirmar
            </button>
            <button onClick={handleCloseChangeModal} className="button-cancel">
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Activities;
