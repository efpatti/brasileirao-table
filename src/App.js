import Brasileirao from "./leagues/Brasileirao";
import Libertadores from "./leagues/Libertadores";
import Paulista from "./leagues/Paulista";
import { Tabs, Tab } from "./Tabs";
import React from "react";

const App = () => {
  const leaguesData = [
    {
      name: Brasileirao,
      label: "Brasileirão", // Adicione uma propriedade label para cada liga
    },
    {
      name: Paulista,
      label: "Paulista", // Adicione uma propriedade label para cada liga
    },
    {
      name: Libertadores,
      label: "Libertadores",
    },
  ];

  return (
    <div>
      <Tabs>
        {leaguesData.map((item, i) => (
          <Tab key={i} label={item.label}>
            {React.createElement(item.name)}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default App;
