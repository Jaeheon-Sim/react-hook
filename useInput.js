import { useState } from "react";
import "./styles.css";

const useInput = (initvalue, validator) => {
  const [value, setValue] = useState(initvalue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let update = true;
    if (typeof validator === "function") {
      update = validator(value);
    }
    if (update) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxlen = (value) => !value.includes("!");
  const name = useInput("Mr.", maxlen);
  return (
    <div className="App">
      <h1>Hello {name.value}</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
