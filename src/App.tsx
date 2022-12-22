import { providers } from "ethers";
import { BrowserRouter } from "react-router-dom";
import { createClient, WagmiConfig } from "wagmi";
import Header from "./components/header";
import AppRouter from "./pages/AppRouter";

const web3Client = createClient({
  autoConnect: false,
  provider: new providers.JsonRpcProvider(import.meta.env.VITE_NETWORK, parseInt(import.meta.env.VITE_CHAIN_ID))
});

function App() {
  return (
    <WagmiConfig client={web3Client}>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
