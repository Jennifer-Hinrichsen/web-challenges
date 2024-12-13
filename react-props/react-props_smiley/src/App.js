import "./styles.css";

function Smiley({ isHappy }) {
  return <div>{isHappy ? "😊" : "😢"}</div>;
}

export default function App() {
  return <Smiley isHappy={true} />;
}
