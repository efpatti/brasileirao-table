import React, { useState } from "react";
import axios from "axios";

function App() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [standings, setStandings] = useState([]);

  const handleYearChange = async (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    try {
      const responseData = await fetchStandings(year);
      setStandings(responseData.data.response[0].league.standings[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStandings = async (year) => {
    const options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/standings",
      params: {
        season: year,
        league: "71",
      },
      headers: {
        "X-RapidAPI-Key": "1136fcefa8msh7685030f419d76dp154591jsn183d22a2edac",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      },
    };

    return await axios.request(options);
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
          {[
            2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
            2021, 2022, 2023,
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {standings && (
        <div className="mt-4">
          {Array.isArray(standings) && standings.length > 0 ? (
            <>
              <h1 className="text-center font-bold text-4xl">
                Tabela {selectedYear}
              </h1>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Posição
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pontos
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {standings.map((team, index) => (
                    <tr
                      key={team.team.id}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {team.rank}
                      </td>
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
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
