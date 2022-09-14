import { useState, useEffect } from "react";
import axios from "axios";

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

  const [title, setTitle] = useState({
    titles: [],
  });
  useEffect(() => {
    async function fetchCromo() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`
        );
        delete response.data._id;
        setForm({ ...response.data });
        setTitle({ titles: [...response.data.titles] });
      } catch (err) {
        console.log(err);
      }
    }
    fetchCromo();
    console.log(title);
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleChangeTitle(e) {}

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/TheBestSoccerTeams/${id}`,
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

        {form.titles.map((current) => {
          return (
            <input
              id="titulos"
              name="title"
              type="text"
              value={current.title}
              onChange={handleChangeTitle}
            />
          );
        })}

        <h2>Equipe:</h2>

        <label htmlFor="formacao">Esquema tático</label>
        <select
          id="formacao"
          name="formation"
          type="text"
          value={form.formation}
          onChange={handleChange}
        >
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

        <label htmlFor="tecnico">Técnico</label>
        <input
          id="tecnico"
          name="coach"
          type="text"
          value={form.coach}
          onChange={handleChange}
        />
        <p>Jogadores Titulares</p>
        <label htmlFor="jogadores">Jogador</label>
        <label htmlFor="posicao">Posição</label>

        {form.players.map((current) => {
          return (
            <div>
              <input
                id="titulos"
                name="title"
                type="text"
                value={current.player_name}
                onChange={handleChange}
              />
              <select
                id="posicao"
                name="position"
                value={current.position}
                onChange={handleChange}
              >
                <option disabled>Posição</option>
                <option value="Goleiro">Goleiro</option>
                <option value="Defensor">Defensor</option>
                <option value="Meio-campista">Meio-campista</option>
                <option value="Atacante">Atacante</option>
              </select>
            </div>
          );
        })}

        <div>Os jogadores e as posições devem aparecer aqui</div>

        <button type="submit">COLAR!</button>
      </form>
    </>
  );
}
