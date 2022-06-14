import React, { FC, useState } from "react";
import Jokes from "./Jokes";

const App: FC = () => {
  const [search, setSearch] = useState("");

  return (
    <main>
      <h1>The Jokes</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <p>
        These are amazing developer jokes curated by{" "}
        <a target="_blank" href="https://twitter.com/shrutikapoor08">
          Shruti Kapoor
        </a>{" "}
        that make many of us laugh and I'm super thankful for her and I'm really
        happy to share them all with you today at this amazing conference full
        of awesome people. Thanks, GitNation for organizing this.
      </p>
      <Jokes search={search} />
      <p>&copy; No one.</p>
    </main>
  );
};

export default App;
