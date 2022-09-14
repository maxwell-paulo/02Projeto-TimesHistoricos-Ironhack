import style from "./style.module.css";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../images/logo-historic-soccer-teams.png";

export function InfoCromo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState([]);

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`
        );

        setCard({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchCard();
  }, []);

  return (
    <div className={style.infoPage}>
      <header className={style.infoHeader}>
        <img className={style.logo} src={logo} alt="logo" />
      </header>
      <main className={style.infos}>
        <div className={style.infosTitle}>
          <img src={card.team_logo} alt="Escudo do time" />
          <h1>{card.team}</h1>
        </div>
        <div className={style.infosAbout}>
          <h2>Ano: {card.year}</h2>
          <p>{card.about}</p>
        </div>
        <Link to={`/edit/${id}`}>
          <button>Editar</button>
        </Link>
      </main>
    </div>
  );
}
