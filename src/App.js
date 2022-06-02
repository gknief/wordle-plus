import { useEffect, useState } from "react";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions6')
      .then(res => res.json())
      .then(json => {
        // generate random num
        const randomWord = json[Math.floor(Math.random() * json.length)];
        console.log(randomWord);
      })
  }, [])

  return (
    <div className="App">
      <h1>Wordle+</h1>
    </div>
  );
}

export default App;
