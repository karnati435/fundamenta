import React, { useState } from "react";
import List from "./List";
import "./App.css";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people = {people}/>
          <button
            onClick={() => {
             setPeople([]);
            }}
          >
            clear me
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
