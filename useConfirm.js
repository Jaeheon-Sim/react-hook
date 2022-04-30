import { useEffect, useRef, useState } from "react";

const useConfirm = (message = "", callback, reject) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      reject();
    }
    return confirmAction;
  };
};

export default function App() {
  const sayHello = () => {
    console.log("heelo");
  };
  const reject = () => {
    console.log("bye");
  };
  const deleteconf = useConfirm("AA", sayHello, reject);
  return (
    <div className="App">
      <button onClick={deleteconf}>delete</button>
    </div>
  );
}
