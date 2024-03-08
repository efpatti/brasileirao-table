import React, { useState, useEffect } from "react";
import axios from "axios";

function Libertadores() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (selectedYear) {
      fetchMatches(selectedYear);
    }
  }, [selectedYear]);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  const fetchMatches = async (year) => {
    try {
      const response = await axios.get(
        `https://api-football-beta.p.rapidapi.com/fixtures?season=${year}&league=13`,
        {
          headers: {
            "X-RapidAPI-Key":
              "1136fcefa8msh7685030f419d76dp154591jsn183d22a2edac",
            "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
          },
        }
      );
      setMatches(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="text-center mb-5 mt-5">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <option value="">Selecione o Ano</option>
          {[2019, 2020, 2021, 2022, 2023].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {matches && matches.length > 0 && (
        <div className="mt-4">
          <h1 className="text-center font-bold text-4xl">
            Tabela {selectedYear}
          </h1>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              {matches.map((match, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 mr-2"
                      src={match.teams.home.logo}
                      alt={match.teams.home.name}
                    />
                    <div>{match.teams.home.name}</div>
                  </div>
                  <div className="mx-2">
                    {match.fixture.status.short === "FT" &&
                      match.teams.home.winner && (
                        <div className="bg-yellow-200 p-1 rounded-full">
                          Vencedor
                        </div>
                      )}
                  </div>
                  <div className="mx-2">
                    {match.fixture.status.short === "FT" &&
                      match.teams.away.winner && (
                        <div className="bg-yellow-200 p-1 rounded-full">
                          Vencedor
                        </div>
                      )}
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 ml-2"
                      src={match.teams.away.logo}
                      alt={match.teams.away.name}
                    />
                    <div>{match.teams.away.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Libertadores;
