import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: ":)" },
    { name: "Bnana", price: 30, emoji: ":)" },
    { name: "Mongo", price: 20, emoji: ":)" },
    { name: "Grape", price: 50, emoji: ":)" },
    { name: "Lime", price: 11, emoji: ":)" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}
