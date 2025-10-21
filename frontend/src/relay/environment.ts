import { type FetchFunction, Environment, Network } from "relay-runtime"

const HTTP_ENDPOINT = window.location.origin + "/graphql"

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: request.text, variables }),
  });
  if (!resp.ok) throw new Error("Response failed.");

  const json = await resp.json();

  if (json.errors) throw new Error("Response failed", {cause: json.errors})

  return json
};

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
});

