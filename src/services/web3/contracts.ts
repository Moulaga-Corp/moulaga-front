import { Contract, providers } from "ethers";
import PROTOCOL_ABI from "./protocol.abi";
import SBT_ABI from "./sbt.abi";

const provider = new providers.JsonRpcProvider(import.meta.env.VITE_NETWORK, parseInt(import.meta.env.VITE_CHAIN_ID));

const protocolContract = new Contract(import.meta.env.VITE_PROTOCOL_ADDRESS, PROTOCOL_ABI, provider);
const sbtContract = new Contract(import.meta.env.VITE_SBT_ADDRESS, SBT_ABI, provider);

export { protocolContract, sbtContract };