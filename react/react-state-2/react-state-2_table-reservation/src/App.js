import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  const handleDelete = () => setPeople(people - 1);
  const handleAdded = () => setPeople(people + 1);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleDelete} onDecrement={handleAdded} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
