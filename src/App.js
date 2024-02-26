import axios from "axios";
import React, { useState } from "react";

function App() {
  const [standings, setStandings] = useState([]);

  const handleClick = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/standings",
      params: {
        season: "2023",
        league: "71",
      },
      headers: {
        "X-RapidAPI-Key": "1136fcefa8msh7685030f419d76dp154591jsn183d22a2edac",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      },
    };

    try {
      const responseData = await axios.request(options);
      console.log(responseData.data); // Adicione esta linha para verificar a estrutura dos dados
      setStandings(responseData.data.response[0].league.standings[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Carregar Standings 2023
      </button>
      {/* Renderizar a resposta apenas se houver dados */}
      {standings && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Standings 2023</h2>
          {Array.isArray(standings) && standings.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {standings.map((team, index) => (
                  <tr
                    key={team.team.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{team.rank}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={team.team.logo}
                            alt={team.team.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {team.team.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhum dado de standings disponível</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
