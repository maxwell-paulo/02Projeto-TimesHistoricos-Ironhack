import style from "./style.module.css";

export function Card(props) {
  const { team, year, team_logo } = props;

  return (
      <div className={style.goldBg}>
        <div className={style.card}>
          <div className={style.teamLogo}>
            <img src={team_logo} alt="Team Logo" />
          </div>
          <div className={style.cardNames}>
              <h1>{team}</h1>
              <h2>{year}</h2>
          </div>
        </div>
      </div>
  );
}
