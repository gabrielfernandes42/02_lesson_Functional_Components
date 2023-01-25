import React from "react";

function Content() {
  const handleNameChange = () => {
    const names = ["bob", "kevin", "Gabriel"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>hello {handleNameChange()}</p>
    </main>
  );
}

export default Content;
