import { ChainId, DAppProvider } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";
import "./styles";
import Layout from "./components/layout";

const config = {
  readOnlyChainId: ChainId.Mumbai,
  readOnlyUrls: {
    [ChainId.Mumbai]: process.env.REACT_APP_ALCHEMY_MUMBAI_RPC
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
