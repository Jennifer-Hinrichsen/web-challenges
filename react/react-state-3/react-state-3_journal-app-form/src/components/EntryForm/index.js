import React from "react";
import "./EntryForm.css";

export default function EntryForm({ onAddEntry }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = {
      motto: formData.get("motto"),
      notes: formData.get("notes"),
    };
    onAddEntry(newEntry);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <label>
        Motto:
        <input type="text" name="motto" required />
      </label>
      <label>
        Notes:
        <textarea name="notes" required />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
}
