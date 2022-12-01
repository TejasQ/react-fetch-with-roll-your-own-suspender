import React, { FC, useEffect, useState, useTransition } from "react";

const createSuspender = (somethingThatReturnsAPromise: () => Promise<any>) => {
  let status = "pending";
  let result: any;
  let suspender = somethingThatReturnsAPromise().then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const createJokeResource = (search?: string) =>
  createSuspender(() => {
    const options = {
      method: "POST",
      headers: {
        Authorization: process.env.XATA_API_KEY,
        "Content-Type": "application/json",
      },
      body: search
        ? JSON.stringify({ filter: { joke: { $contains: search } } })
        : '{"page":{"size":15}}',
    };

    const promise = fetch(
      "https://xata-learning-fvmet3.eu-west-1.xata.sh/db/dev-jokes:main/tables/jokes/query",
      options
    )
      .then((response) => response.json())
      .then((response) => response.records);

    return promise;
  });

const initialJokeResource = createJokeResource();

const Jokes: FC<{ search: string }> = ({ search }) => {
  const [jokeResource, setJokeResource] = useState(initialJokeResource);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => setJokeResource(createJokeResource(search)));
  }, [search]);

  return (
    <div className="jokes-container">
      {jokeResource.read().map((j) => (
        <div className="joke" key={j.id}>
          {j.joke}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
