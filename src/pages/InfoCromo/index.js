import style from "./style.module.css";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../images/logo-historic-soccer-teams.png";
import { PlayerCard } from "../../components/PlayerCard";

export function InfoCromo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({players: [], titles: []});
  
  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`
        );

        setCard( response.data );
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchCard();
  }, [id]);

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
        <div className={style.infoButtons}>
            <Link to={`/edit/${id}`}>
              <button className={style.editBtn}></button>
            </Link>
            <button className={style.deleteBtn}></button>
        </div>
        <div className={style.infosAbout}>
          <img className={style.teamImg} src={card.team_img} alt='Imagem do time'/>
          <h2>Ano: {card.year}</h2>
          <p>{card.about}</p>
          <h2>Escalação:</h2>
          <h3>Técnico: {card.coach}</h3>
          <h3>Jogadores Titulares:</h3>
          <ul>
            {card.players.map((currentPlayer) => {
                      return <>
                      {/* <PlayerCard year={card.year} team_logo={card.team_logo} player_name={currentPlayer.player_name} position={currentPlayer.position}/>
                      <li>{currentPlayer.player_name} - {currentPlayer.position}</li> */}
                      </>
                  })}
          </ul>
          <h2>Títulos:</h2>
          <ul>
            {card.titles.map((currentTitle) => {
                      return <>
                        <li>{currentTitle.title}</li>
                      </>
                  })}
          </ul>
        </div>
      </main>
    </div>
  );
}
