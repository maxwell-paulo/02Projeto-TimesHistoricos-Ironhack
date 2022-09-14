import style from "./style.module.css";
import logo from "../../images/logo-historic-soccer-teams.png";

export function Navbar() {
  return (
    <div className={style.container}>
      <img src={logo} alt="siteLogo" className={style.img} />
      <div className={style.links}>
        <p>Home</p>
        <p>Sobre</p>
        <p>Colocar cromo</p>
      </div>
    </div>
  );
}
