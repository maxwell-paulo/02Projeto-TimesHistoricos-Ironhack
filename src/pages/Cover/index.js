import style from "./style.module.css";
import { Link } from "react-router-dom";
import capa from "../../images/capa-album-copa_1_cleanup.png";

export function Cover() {
  return (
    <>
      <div className={style.container}>
        <div className={style.imgDiv}>
          <Link to={"/home"}>
            <img src={capa} alt="capa do site" className={style.capa} />
          </Link>
        </div>
      </div>
    </>
  );
}
