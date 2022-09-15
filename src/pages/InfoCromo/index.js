import style from "./style.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { PlayerCard } from "../../components/PlayerCard";

export function InfoCromo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({ players: [], titles: [] });

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`
        );

        setCard(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCard();
  }, [id]);

  function handleToast() {
    if (card._is_locked === false) {
      toast((t) => (
        <span>
          Tem certeza que deseja <b>excluir</b> esse cromo?
          <div className={style.toastBtns}>
            <button
              className={style.toastDelBtn}
              onClick={() => {
                handleDelete(t);
              }}
            >
              Excluir
            </button>
            <button
              className={style.toastNoBtn}
              onClick={() => toast.dismiss(t.id)}
            >
              Não
            </button>
          </div>
        </span>
      ));
    } else {
      toast.error("Esse cromo não é deletável");
    }
  }

  function handleEdit() {
    if (card._is_locked === false) {
      navigate(`/edit/${id}`);
    } else {
      toast.error("Esse cromo não é editável");
    }
  }

  async function handleDelete(t) {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`
      );

      toast.dismiss(t.id);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={style.infoPage}>
      {/* <header className={style.infoHeader}>
        <img className={style.logo} src={logo} alt="logo" />
      </header> */}
      <main className={style.infos}>
        <div className={style.infosTitle}>
          <img src={card.team_logo} alt="Escudo do time" />
          <h1>{card.team}</h1>
        </div>

        <div className={style.infosAbout}>
          <h2>Ano: {card.year}</h2>
          <img
            className={style.teamImg}
            src={card.team_img}
            alt="Imagem do time"
          />
          <p>{card.about}</p>
          <h2>Títulos:</h2>
          <ul>
            {card.titles.map((currentTitle) => {
              return (
                <>
                  <li>{currentTitle.title}</li>
                </>
              );
            })}
          </ul>
          <h2>Escalação:</h2>
          <h3>Técnico: {card.coach}</h3>
          <h3>Formação: {card.formation}</h3>
          <h3>Jogadores Titulares:</h3>
          <PlayerCard />
        </div>
        <div className={style.infoButtons}>
          <button className={style.editBtn} onClick={handleEdit}></button>
          <button className={style.deleteBtn} onClick={handleToast}></button>
        </div>
      </main>
    </div>
  );
}
