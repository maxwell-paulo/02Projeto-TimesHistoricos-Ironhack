import style from "./style.module.css";
import igor from "../../images/igor-psd.png";
import max from "../../images/max-psd.png";
import github from "../../images/GitHub icon.png";
import linkedin from "../../images/linkedin icon.png";

export function AboutUs() {
  return (
    <div className={style.infoPage}>
      <main className={style.infos}>
        <div className={style.infosTitle}>
          <h1>Sobre nós</h1>
        </div>

        <div className={style.infosAbout}>
          <div className={style.infosText}>
            <p>
              Projeto realizando durante o bootcamp de Web Development da
              Ironhack.
            </p>
            <p>
              Utilizamos conhecimentos obtidos nas 5 primeiras semanas do
              bootcamp.
            </p>
            <p>
              Fizemos o uso de bibliotecas como React.js e React Hot Toast com
              base em Javascript, HTML e CSS.
            </p>
            <p>
              O objetivo do projeto é criar um banco dados que pode ser
              atualizado e editado por usuários.
            </p>
            <p>
              Esse banco de dados armazena informações sobre os maiores times do
              futebol brasileiro.
            </p>
            <p>
              Se não encontrou o seu esquadrão favorito, sinta-se à vontade para
              adicioná-lo.
            </p>
            <p>
              {" "}
              Código do projeto:{" "}
              <a
                classname={style.linkStyle}
                style={{ textDecoration: "none", color: "#965083" }}
                href="https://github.com/IgorALopes/historic-soccer-teams"
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui
              </a>
            </p>
          </div>

          <h2 className={style.ourTitle}>Criadores</h2>
          <div className={style.ourInfosContainer}>
            <div className={style.ourInfos}>
              <h3>Igor Lopes</h3>
              <img className={style.ourCromo} src={igor} alt="max-cromo" />
              <div className={style.ourLinks}>
                <a
                  href="https://github.com/IgorALopes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={style.btn}>
                    <img className={style.img} src={github} alt="giticon" />
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/igor-lopes-83232ba9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={style.btn}>
                    <img
                      className={style.img}
                      src={linkedin}
                      alt="linkdinicon"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className={style.ourInfos}>
              <h3>Maxwell Paulo</h3>
              <img className={style.ourCromo} src={max} alt="max-cromo" />

              <div className={style.ourLinks}>
                <a
                  href="https://github.com/maxwell-paulo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={style.btn}>
                    <img className={style.img} src={github} alt="giticon" />
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/-maxpaulo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={style.btn}>
                    <img
                      className={style.img}
                      src={linkedin}
                      alt="linkdinicon"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
