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
      </Tabs>
    </div>
  );
};

export default App;
