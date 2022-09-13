import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function AddCromo() {
  const navigate = useNavigate();

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

  function titleHandleChange(e) {
    setTitles({ ...titles, [e.target.name]: e.target.value });
    console.log(titles);
  }

  function handleAddTitle(e) {
    e.preventDefault();

    setForm({
      ...form,
      titles: [...form.titles, titles],
    });
    console.log(titles);
  }

  function playerHandleChange(e) {
    setPlayers({ ...players, [e.target.name]: e.target.value });
    console.log(players);
  }

  function handleAddPlayer(e) {
    e.preventDefault();

    setForm({
      ...form,
      players: [...form.players, players],
    });
    console.log(form);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/TheBestSoccerTeams",
        form
      );

      navigate("/");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Cole uma figurinha</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="time">Nome do time</label>
        <input
          id="time"
          name="team"
          type="text"
          value={form.team}
          onChange={handleChange}
        />

        <label htmlFor="ano">Ano</label>
        <input
          id="ano"
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
        />

        <label htmlFor="logo">Imagem do escudo do time - url</label>
        <input
          id="logo"
          name="team_logo"
          type="text"
          value={form.team_logo}
          onChange={handleChange}
        />

        <label htmlFor="imagem">Imagem do time (jogadores) - url</label>
        <input
          id="imagem"
          name="team_img"
          type="text"
          value={form.team_img}
          onChange={handleChange}
        />

        <label htmlFor="sobre">Grandes feitos</label>
        <input
          id="sobre"
          name="about"
          type="text"
          value={form.about}
          onChange={handleChange}
        />

        <label htmlFor="titulos">Títulos:</label>
        <input
          id="titulos"
          name="title"
          type="text"
          value={titles.title}
          onChange={titleHandleChange}
        />
        <button type="button" onClick={handleAddTitle}>
          Adicionar
        </button>

        <div>Os titulos devem aparecer aqui</div>

        <h2>Equipe:</h2>

        <label htmlFor="formacao">Esquema tático</label>
        <select
          id="formacao"
          name="formation"
          type="text"
          value={form.formation}
          onChange={handleChange}
        >
          <option hidden defaultValue>
            Esquema Tático
          </option>
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

        <label htmlFor="tecnico">Técnico</label>
        <input
          id="tecnico"
          name="coach"
          type="text"
          value={form.coach}
          onChange={handleChange}
        />

        <label htmlFor="jogadores">Jogadores Titulares</label>
        <input
          id="jogadores"
          name="player_name"
          type="text"
          value={players.player_name}
          onChange={playerHandleChange}
        />

        <label htmlFor="posicao">Jogadores Titulares</label>
        <select
          id="posicao"
          name="position"
          value={players.position}
          onChange={playerHandleChange}
        >
          <option hidden defaultValue>
            Posição
          </option>
          <option value="Goleiro">Goleiro</option>
          <option value="Defensor">Defensor</option>
          <option value="Meio-campista">Meio-campista</option>
          <option value="Atacante">Atacante</option>
        </select>
        <button type="button" onClick={handleAddPlayer}>
          Adicionar
        </button>

        <div>Os jogadores e as posições devem aparecer aqui</div>

        <button type="submit">COLAR!</button>
      </form>
    </>
  );
}
