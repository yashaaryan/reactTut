const name = "rob";

function displayMessage() {
  return "wow";
}

function Hello(props) {
  return <h1>{props.message} {props.name}</h1>;
}

export default Hello;
