export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      <ul>
        {price > 20 ? (
          <li>
            {" "}
            {name} {price} {emoji}{" "}
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
