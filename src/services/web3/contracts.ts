import { Contract, providers } from "ethers";
import PROTOCOL_ABI from "./protocol.abi";

const provider = new providers.JsonRpcProvider(import.meta.env.VITE_NETWORK, parseInt(import.meta.env.VITE_CHAIN_ID));

const protocolContract = new Contract(import.meta.env.VITE_PROTOCOL_ADDRESS, PROTOCOL_ABI, provider);

export { protocolContract };