import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      style={{
        fontSize: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Hello from React
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
