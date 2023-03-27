import React from "react";
import axios from "axios";
import { useEffect } from "react";
import isoCodes from "./countries/iso-codes";
import { hasFlag } from "country-flag-icons";
function App() {
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=b77bf23d4ff14487a10d34a0ce1f4218`
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <header>gnNews</header>
      <aside>
        {Array.from(isoCodes).map((n) => (
          <div key={n[0]}>
            <p>{n[1]}</p>
            {hasFlag(n[0].toUpperCase()) ? (
              <img
                width={25}
                height={15}
                alt={n[1]}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${n[0].toUpperCase()}.svg`}
              />
            ) : null}
          </div>
        ))}
      </aside>
      <main>Hello gnNews</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
