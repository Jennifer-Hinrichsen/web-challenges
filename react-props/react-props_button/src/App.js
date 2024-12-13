import "./styles.css";
export default function App() {
  return <Button color="blue" text="Click me" />;
}
function Button({ color, disabled, text }) {
  return (
    <button style={{ height: "100px" }} disabled={disabled}>
      {text}
    </button>
  );
}
