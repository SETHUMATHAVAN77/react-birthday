import React, { useState } from "react";
import dataDogs from "./data";

import List from "./components/list";

const App = () => {
  const [people, setPeople] = useState(dataDogs);

  const removeItem = (id) => {
    const leftItems = people.filter((persons) => persons.id !== id);

    setPeople(leftItems);
  };

  return (
    <main className="card">
      <List person={people} removePerson={removeItem} />
      <button type="button" className="button" onClick={() => setPeople([])}>
        Clear All
      </button>
    </main>
  );
};

export default App;
