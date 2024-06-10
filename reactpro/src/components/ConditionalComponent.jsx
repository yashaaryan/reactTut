import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  let messageOne = <h1>this is msg1</h1>;
  let messageTwo = <h1>this is msg2</h1>;
  let message;
  const display = true;

  if (display) {
    message = messageOne;
  } else {
    message = messageTwo;
  }

  return message;
}
