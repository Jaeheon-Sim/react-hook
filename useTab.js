import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "hello 1"
  },
  {
    tab: "Section 2",
    content: "hello 2"
  }
];

const useTab = (initidx, all) => {
  const [idx, setIdx] = useState(initidx);
  if (!all || !Array.isArray(all)) {
    return;
  }
  return {
    curiten: all[initidx],
    changeitem: setIdx
  };
};

export default function App() {
  const { curiten, changeitem } = useTab(0, content);
  return (
    <div className="App">
      {content.map((a, index) => (
        <button
          onClick={() => {
            changeitem(index);
          }}
        >
          {a.tab}
        </button>
      ))}
      <h1>{curiten.content}</h1>
    </div>
  );
}
