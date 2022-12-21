import { providers } from "ethers";
import { BrowserRouter } from "react-router-dom";
import { createClient, WagmiConfig } from "wagmi";
import "./App.css";
import Navbar from "./components/navbar";
import AppRouter from "./pages/AppRouter";

const web3Client = createClient({
  autoConnect: false,
  provider: new providers.JsonRpcProvider(import.meta.env.VITE_NETWORK)
});

function App() {
  return (
    <WagmiConfig client={web3Client}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
