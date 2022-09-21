import style from "./style.module.css";
import { Link } from "react-router-dom";
import capa from "../../images/capa-album-copa.png";

export function Cover() {
  return (
    <>
      <div className={style.container}>
        <Link to={"/home"}>
          <img src={capa} alt="capa do site" className={style.capa} />
        </Link>
      </div>
    </>
  );
}
