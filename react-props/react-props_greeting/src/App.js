import "./styles.css";

function Greeting({ name }) {
  const coaches = ["Andrea", "Jennifer"];
  return (
    <div>
      <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>
    </div>
  );
}

export default function App() {
  return <Greeting name="Jennifer" />;
}
