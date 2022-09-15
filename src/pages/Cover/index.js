import style from "./style.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-historic-soccer-teams.png";

export function Cover() {
  return (
    <>
      <Link to={"/home"}>
        <div className={style.container}>
          <img src={logo} alt="siteLogo" className={style.img} />
        </div>
      </Link>
    </>
  );
}
