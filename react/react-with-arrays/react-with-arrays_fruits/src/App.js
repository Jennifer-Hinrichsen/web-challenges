import Card from "./components/Card";
export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 4,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 5,
      name: "🥭 Mango",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
