import { useState, useEffect } from "react"
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import PullRequests from "./components/PullRequests";

function App() {

  const TOKEN = "2006b93465f7e60792ddd2a2c2381a312faea90c"; // paypal
  const TOKEN2 = "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"; // personal

  useEffect(() => {
    // fetch("https://github.paypal.com/api/v3/repos/Checkout-R/checkoutuinodeweb/pulls", {
    //   headers: { "Authorization": `token ${TOKEN}` }
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));

    // const sha = "74a025dcdba4f1b7cdd49f2047c220d7f74f23f3";
    // fetch(`https://github.paypal.com/api/v3/repos/Checkout-R/checkoutuinodeweb/commits/${sha}/status`, {
    //   headers: { "Authorization": `token ${TOKEN}` }
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));
  }, []);

  const httpLink = new HttpLink({
    uri: "https://github.paypal.com/api/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        Authorization: `bearer ${TOKEN}`
      }
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>hi</h1>
        <PullRequests/>
      </div>
    </ApolloProvider>
  );
}

export default App;
