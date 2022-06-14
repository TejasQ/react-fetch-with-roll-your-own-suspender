import React, { FC } from "react";

const Jokes: FC<{ search: string }> = ({ search }) => {
  const [jokes, setJokes] = React.useState<{ id: string; joke: string }[]>([]);

  return (
    <div className="jokes-container">
      {jokes.map((j) => (
        <div className="joke" key={j.id}>
          {j.joke}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
