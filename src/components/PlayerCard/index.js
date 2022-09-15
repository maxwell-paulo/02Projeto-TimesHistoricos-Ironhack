import style from "./style.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function PlayerCard(props) {
  const { id } = useParams();
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

  return (
    <div className={style.cards}>
      {card.players.map((current) => {
        if (current.position === "Goleiro") {
          return (
            <div className={style.golCard}>
              <p className={style.playerName}>{current.player_name}</p>
            </div>
          );
        }
        if (current.position === "Defensor") {
          return (
            <div className={style.defCard}>
              <p className={style.playerName}>{current.player_name}</p>
            </div>
          );
        }
        if (current.position === "Meio-campista") {
          return (
            <div className={style.meiCard}>
              <p className={style.playerName}>{current.player_name}</p>
            </div>
          );
        }
        if (current.position === "Atacante") {
          return (
            <div className={style.ataCard}>
              <p className={style.playerName}>{current.player_name}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
