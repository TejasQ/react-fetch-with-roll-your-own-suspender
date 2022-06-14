import React, { FC } from "react";

const App: FC = () => {
  return (
    <main>
      <h1>The Jokes</h1>
      <input type="text" placeholder="Search..." />
      <p>
        These are amazing developer jokes curated by{" "}
        <a href="https://twitter.com/shrutikapoor08">Shruti Kapoor</a> that make
        many of us laugh and I'm super thankful for her and I'm really happy to
        share them all with you today at this amazing conference full of awesome
        people. Thanks, GitNation for organizing this.
      </p>
      <hr />

      <hr />
      <p>&copy; No one.</p>
    </main>
  );
};

export default App;
