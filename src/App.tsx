import React, { FC } from "react";
import { Person } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="Pedro" age={20} email="dsfdsf@sfgd.com" />
    </div>
  );
};

export default App;
