import style from "./style.module.css";

export function PlayerCard(props) {
  const { year, team_logo, player_name, position } = props;

  return (
    <>
      <div className={style.goldBg}>
        <div className={style.card}>
          <div className={style.teamLogo}>
            <img src={team_logo} alt="Team Logo" />
            <h2>{year}</h2>
          </div>
          <div className={style.cardNames}>
              <h1>{player_name}</h1>
              <h2>{position}</h2>
          </div>
        </div>
      </div>
    </>
  );
}