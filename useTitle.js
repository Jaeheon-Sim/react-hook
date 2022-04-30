import { useEffect, useState } from "react";

const useTitle = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const updater = useTitle("loading...");
  setTimeout(() => updater("Home"), 5000);
  return (
    <div className="App">
      <div>title</div>
    </div>
  );
}
