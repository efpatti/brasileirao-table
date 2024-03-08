<<<<<<< HEAD
import React from 'react';
import { Tabs, Tab } from './components/Tabs';
import Brasileiro from "./tabs/Brasileiro"
import Paulista from './tabs/Paulista';
const App = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Brasileirão">
          <Brasileiro />
        </Tab>
        <Tab label="Paulistão">
          <Paulista />
        </Tab>
=======
import Brasileirao from "./leagues/Brasileirao";
// import CopaDoBrasil from "./leagues/CopaDoBrasil";
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
            {/* Passe a label como propriedade */}
            {React.createElement(item.name)}
          </Tab>
        ))}
>>>>>>> f275342 (project added to portfolio)
      </Tabs>
    </div>
  );
};

export default App;
