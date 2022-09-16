import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css";

import { useNavigate, useParams } from "react-router-dom";

export function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    team: "",
    year: 0,
    team_logo: "",
    team_img: "",
    titles: [],
    formation: "",
    coach: "",
    players: [],
    about: "",
    _is_locked: false,
  });

  const [titles, setTitles] = useState({
    title: "",
  });

  const [players, setPlayers] = useState({
    player_name: "",
    position: "",
  });

  useEffect(() => {
    async function fetchCromo() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`
        );
        delete response.data._id;
        setForm({ ...response.data });

        console.log(titles);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCromo();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleChangeTitle(e) {
    setTitles({ ...titles, [e.target.name]: e.target.value });
  }
  function handleAddTitle(e) {
    e.preventDefault();

    setForm({
      ...form,
      titles: [...form.titles, titles],
    });
    console.log(titles);
  }

  function handleChangePlayer(e) {
    setPlayers({ ...players, [e.target.name]: e.target.value });
  }

  function handleAddPlayer(e) {
    e.preventDefault();
    setForm({
      ...form,
      players: [...form.players, players],
    });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`,
        form
      );

      navigate("/home");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  function handleDeleteTitle(title) {
    let newTitles = form.titles.filter((current) => {
      return current !== title;
    });
    setForm({ ...form, titles: [...newTitles] });
  }

  function handleDeletePlayer(jogador) {
    let newPlayers = form.players.filter((current) => {
      return current !== jogador;
    });
    setForm({ ...form, players: [...newPlayers] });
  }
  return (
    <main className={style.addCromoPage}>
      <section className={style.formSection}>
        <h1>Editar cromo</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formTimeAno}>
            <div className={style.formTime}>
              <label htmlFor="time">Nome do time:</label>
              <input
                className={style.inputs}
                id="time"
                name="team"
                type="text"
                value={form.team}
                onChange={handleChange}
              />
            </div>
            <div className={style.formAno}>
              <label htmlFor="ano">Ano:</label>
              <input
                className={style.inputAno}
                id="ano"
                name="year"
                type="number"
                value={form.year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.urlForms}>
            <div className={style.urlForm}>
              <label htmlFor="logo">Imagem do escudo do time (url)</label>
              <input
                className={style.inputUrl}
                id="logo"
                name="team_logo"
                type="text"
                value={form.team_logo}
                onChange={handleChange}
                placeholder="http://www.exemplo.com/img.png"
              />
            </div>
            <div className={style.urlForm}>
              <label htmlFor="imagem">Imagem dos jogadores (url)</label>
              <input
                className={style.inputUrl}
                id="imagem"
                name="team_img"
                type="text"
                value={form.team_img}
                onChange={handleChange}
                placeholder="http://www.exemplo.com/img.png"
              />
            </div>
          </div>
          <label htmlFor="sobre">Descrição</label>
          <textarea
            className={style.inputDescr}
            id="sobre"
            name="about"
            type="text"
            value={form.about}
            onChange={handleChange}
            placeholder="Descrição dos grandes feitos deste time."
          />
          <div className={style.formTitulos}>
            <label htmlFor="titulos">Títulos: </label>
            <div className={style.formTitulosAddBtn}>
              <input
                className={style.inputTitulos}
                id="titulos"
                name="title"
                type="text"
                value={titles.title}
                onChange={handleChangeTitle}
                placeholder="Escreva aqui o título que o fez ser memorável."
              />
              <button
                className={style.AddBtn}
                type="button"
                onClick={handleAddTitle}
              >
                Adicionar
              </button>
            </div>
            <div className={style.addContainer}>
              {form.titles.map((current) => {
                return (
                  <div className={style.timeTitulo}>
                    <p>{current.title}</p>
                    <button
                      className={style.delBtn}
                      onClick={() => {
                        handleDeleteTitle(current);
                      }}
                      type="button"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <h2>Equipe:</h2>
          <div className={style.formTecEsqTatico}>
            <div className={style.formTecnico}>
              <label htmlFor="tecnico">Técnico</label>
              <input
                className={style.inputs}
                id="tecnico"
                name="coach"
                type="text"
                value={form.coach}
                onChange={handleChange}
              />
            </div>
            <div className={style.formEsqTatico}>
              <label htmlFor="formacao">Esquema tático</label>
              <select
                className={style.inputs}
                id="formacao"
                name="formation"
                type="text"
                value={form.formation}
                onChange={handleChange}
              >
                <option hidden defaultValue>
                  Selecione
                </option>
                <option disabled>Esquema Tático</option>
                <option value="4-3-3">4-3-3</option>
                <option value="4-4-2">4-4-2</option>
                <option value="3-5-2">3-5-2</option>
                <option value="3-4-3">3-4-3</option>
                <option value="4-2-3-1">4-2-3-1</option>
                <option value="4-5-1">4-5-1</option>
                <option value="5-3-2">5-3-2</option>
                <option value="4-1-4-1">4-1-4-1</option>
                <option value="4-1-3-2">4-1-3-2</option>
              </select>
            </div>
          </div>
          <div className={style.formTitulos}>
            <label htmlFor="jogadores">Jogadores titulares</label>
            <div className={style.formTitulosAddBtn}>
              <input
                className={style.inputs}
                id="jogadores"
                name="player_name"
                type="text"
                value={players.player_name}
                onChange={handleChangePlayer}
                placeholder="Nome do jogador"
              />
              <select
                className={style.inputs}
                id="posicao"
                name="position"
                value={players.position}
                onChange={handleChangePlayer}
              >
                <option hidden defaultValue>
                  Posição
                </option>
                <option disabled>Posição</option>
                <option value="Goleiro">Goleiro</option>
                <option value="Defensor">Defensor</option>
                <option value="Meio-campista">Meio-campista</option>
                <option value="Atacante">Atacante</option>
              </select>
              <button
                className={style.AddBtn}
                type="button"
                onClick={handleAddPlayer}
              >
                Adicionar
              </button>
            </div>
            <div className={style.addContainerPlayers}>
              {form.players.map((current) => {
                return (
                  <div className={style.timeTitulo}>
                    <p>
                      {current.player_name} {current.position}
                    </p>
                    <button
                      className={style.delBtn}
                      onClick={() => {
                        handleDeletePlayer(current);
                      }}
                      type="button"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.atuaCancelarBtns}>
            <button className={style.atualizarBtn} type="submit">
              Atualizar
            </button>
            <button className={style.cancelarBtn} type="submit" navigate="/">
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
