import { DAppProvider } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";
import "./styles";
import Layout from "./components/layout";

// Change this to your own Infura project id: https://infura.io/register
const config = {
  readOnlyChainId: 80001,
  readOnlyUrls: {
    80001: "https://polygon-mumbai.g.alchemy.com/v2/wH0XJtlYF1nSaMizLBhRgN7HFJddg_9i"
  }
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <Layout />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
