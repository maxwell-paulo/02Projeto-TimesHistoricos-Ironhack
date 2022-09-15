import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function SearchBar() {
  const [teamList, setTeamList] = useState([]);
  const navigate = useNavigate();

  function handleSelect(e) {
    navigate(`/info-cromo/${e.value}`);
  }

  function styleFunction(provided, state) {
    return { ...provided, color: state.isFocused ? "blue" : "red" };
  }

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/TheBestSoccerTeams`
        );
        setTeamList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeam();
  }, []);

  const options = teamList.map((current) => {
    return {
      value: `${current._id}`,
      label: `${current.team} - ${current.year}`,
    };
  });

  return (
    <div className={style.select}>
      <Select
        options={options}
        onChange={handleSelect}
        styles={styleFunction}
        placeholder="Procurar time favorito"
      />
    </div>
  );
}
