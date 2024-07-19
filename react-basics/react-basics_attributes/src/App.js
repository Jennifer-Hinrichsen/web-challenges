import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello Again</h2>
      <label htmlFor="subscribe">Subscribe</label>
      <input type="email" id="subscribe" name="subscribe" />
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        Read more on Wikipedia
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
