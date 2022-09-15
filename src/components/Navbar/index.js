import style from "./style.module.css";
import logo from "../../images/logo-historic-soccer-teams.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../Searchbar";

export function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to={"/home"}>
          <img src={logo} alt="siteLogo" className={style.img} />
        </Link>
        <div className={style.links}>
          <Link to={"/home"}>
            <p>Home</p>
          </Link>
          <Link to={`/add-cromo`}>
            <p>Colar cromo</p>
          </Link>
          <Link to={`/about-us`}>
            <p>Sobre</p>
          </Link>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
