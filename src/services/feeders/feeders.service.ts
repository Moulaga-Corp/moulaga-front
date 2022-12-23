import { protocolContract } from "../web3/contracts";

async function isFeeder(wallet: string) {
	const [result]: [boolean] = await protocolContract.functions.isFeeder(wallet);
	return result;
}

export { isFeeder }