import "./styles.css";

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <Button>First Button</Button>
      <Button>Second Button</Button>
      <Button>Third Button</Button>
      <Button>Fourth Button</Button>
    </main>
  );
}
